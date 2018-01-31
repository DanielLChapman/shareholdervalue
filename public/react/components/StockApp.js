import React, { Component } from 'react';
import axios from 'axios';

import LoadingPage from '../containers/loadingPage';
import DisplayPage from '../containers/displayData';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { grabStocks, loadJSON, changeYear, resetState, sortState } from '../actions/index';

class StockApp extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isLoading: true,
			currentlyLoading: -1,
			loaded: false
		};
		this.handleInputs = this.handleInputs.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.currentlyLoading < nextProps.stocks.length) {
			this.setState({
				currentlyLoading: this.state.currentlyLoading + 1
			})
		}
	}	

	componentDidUpdate() {
		if (!this.state.loaded) {
			if (this.state.currentlyLoading < this.props.stocks.length ) {
				setTimeout(() => {
					this.props.grabStocks(this.props.stocks[this.state.currentlyLoading].symbol);
				}, 500);
			} else {
				this.isLoaded();
			}
		}
	}

	componentDidMount () {
		this.props.loadJSON();
	}

	isLoaded () {
		this.props.sortState();
		this.setState({
			isLoading: false,
			loaded: true
		})
	};

	handleInputs (year) {
		this.props.resetState();
		this.props.changeYear(year);
		this.setState({
			isLoading: true,
			currentlyLoading: 0,
			loaded: false
		});
	}



	render () {
		let display = null,
			appDisplayStyle = {opacity: '1'},
			loadingPageStyle={display: 'none'},
			loadingPage = null;
		if (this.state.isLoading) {
			loadingPageStyle = {display: 'block', opacity: '1'}
			appDisplayStyle = {opacity: '.5'};
		}
		display = <div className="empty-div display-page-app" style={appDisplayStyle}>
					<DisplayPage />
				  </div>
		loadingPage = <div className="loadingPageDiv" style={loadingPageStyle}>
						<LoadingPage />
					</div>
		return (
			<div className="empty-div">
				{loadingPage}
				<section className="display-top">
					<nav className="navbar navbar-default">
					  <div className="container-fluid">
					    <div className="navbar-header">
					      <a className="navbar-brand" href="/">Stock Evaluator</a>
					    </div>
					    <ul className="nav navbar-nav">
					      <li onClick={ () => {
					      	this.handleInputs(1)
					      }}><a href="#">1 Year</a></li>
					      <li className="active"  onClick={ () => {
					      	this.handleInputs(3)
					      }}><a href="#">3 Year</a></li>
					      <li onClick={ () => {
					      	this.handleInputs(5)
					      }}><a href="#">5 Year</a></li>
					    </ul>
					  </div>
					</nav>
				</section>
				{display}
			</div>
		)
	}
};

function mapDispatchToProps (dispatch) {
	return bindActionCreators({ loadJSON, grabStocks, changeYear, resetState, sortState }, dispatch);
}

function mapStateToProps ({ stocks }) {
	return { stocks };// {videos } === { videos: videos }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockApp);



