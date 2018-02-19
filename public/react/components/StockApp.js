import React, { Component } from 'react';
import axios from 'axios';

import LoadingPage from '../containers/loadingPage';
import DisplayPage from '../containers/displayData';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { grabStocks, loadJSON, changeYear,  sortState, customYear } from '../actions/index';

const yearRegex = /^([0-9]{4}\-[0-9]{2}\-[0-9]{2}){1}$/;

class StockApp extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isLoading: true,
			currentlyLoading: -1,
			loaded: false,
			customYearLow: '2015-01-01',
			customYearLowStyling: {border: '1px solid green'},
			customYearHigh: '2018-01-01',
			customYearHighStyling: {border: '1px solid green'},
			displaySymbol: true,
			custom: false
		};
		this.handleInputs = this.handleInputs.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.isLoaded = this.isLoaded.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
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
		if ([1,3,5].includes(year)) {
			this.props.loadJSON();
			this.props.changeYear(year);
			this.setState({
				isLoading: true,
				currentlyLoading: 0,
				loaded: false,
				custom: false
			});
		} else if (year === "custom"){
			this.setState({
				custom: true
			})
		} else {
			this.setState({
				displaySymbol: !this.state.displaySymbol
			});
		}
	}

	onInputChange (event) {
		const target = event.target;
		const name = target.name;
		let cylS = this.state.customYearLowStyling;
		let cyhS = this.state.customYearHighStyling;
		switch(name) {
			case 'customYearLow':
				yearRegex.test(target.value) ?
					cylS = {border: '1px solid green'} :
					cylS = {border: '1px solid red'}
				break;
			case 'customYearHigh':
				yearRegex.test(target.value) ?
					cyhS = {border: '1px solid green'} :
					cyhS = {border: '1px solid red'}
				break;
			default:
				console.log('no idea what happened');
		}
		this.setState({
			[name]: target.value,
			customYearLowStyling: cylS,
			customYearHighStyling: cyhS
		});

	}

	onFormSubmit (event) {
		event.preventDefault();
		let tempLow = this.state.customYearLow;
		let tempHigh = this.state.customYearHigh;
		if (yearRegex.test(this.state.customYearLow) && yearRegex.test(this.state.customYearHigh)) {
			tempLow < tempHigh ?
				this.props.customYear(tempLow, tempHigh) :
				this.props.customYear(tempHigh, tempLow);
			this.props.loadJSON();
			this.setState({
				isLoading: true,
				currentlyLoading: 0,
				loaded: false
			});
		} else {
			alert('Please Make Sure Both Inputs Are In The Form (2018-01-01)');
		}
	}

	render () {
		let display = null,
			appDisplayStyle = {opacity: '1'},
			loadingPageStyle={display: 'none'},
			loadingPage = null,
			customFormDisplay = loadingPageStyle,
			loadingMessage = '';
		if (this.state.isLoading) {
			loadingPageStyle = {display: 'block', opacity: '1'}
			appDisplayStyle = {opacity: '.5'};
		}
		if (this.state.custom) {
			customFormDisplay = {display: 'block'};
			loadingMessage = `This API uses monthly returns, 
			so if you use the date 2015-01-16, the api will return 2015-01-31. 
			Sorry for the inconvience but until there is a better API with dividend returns,
			this is the best we can do.`
		}
		display = <div className="empty-div display-page-app" style={appDisplayStyle}>
					<DisplayPage displaySymbol={this.state.displaySymbol}/>
				  </div>
		loadingPage = <div className="loadingPageDiv" style={loadingPageStyle}>
						<LoadingPage message={loadingMessage}/>
					</div>

		//hide form unless custom is hit
		return (
			<div className="empty-div">
				{loadingPage}
				<section className="display-top">
					<nav className="navbar navbar-default">
					  <div className="container-fluid">
					    <div className="navbar-header">
					    	<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				              <span className="sr-only">Toggle navigation</span>
				              <span className="icon-bar"></span>
				              <span className="icon-bar"></span>
				              <span className="icon-bar"></span>
				            </button>
					      <a className="navbar-brand" href="/">Stock Evaluator</a>
					    </div>
					    <div id="navbar" className="navbar-collapse collapse" aria-expanded="false" style={{height: "1px"}}>
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
						      <li onClick={ () => {
						      	this.handleInputs('custom')
						      }}><a href="#">Custom</a></li>
						      <li onClick={ () => {
						      	this.handleInputs('switchName')
						      }}><a href="#">Switch Names</a></li>

						      
						    </ul>
						    <form onSubmit={this.onFormSubmit} className="navbar-form navbar-left" style={customFormDisplay}>
						    	<div className="form-group" style={{marginRight: '5px'}}>
						    		<input type="text" name="customYearLow" onChange={this.onInputChange} className="form-control" name="customYearLow" value={this.state.customYearLow} style={this.state.customYearLowStyling} />
						    	</div>
						    	<div className="form-group" style={{marginRight: '5px'}}>
						    		<input type="text" name="customYearHigh" onChange={this.onInputChange} className="form-control" name="customYearHigh"  value={this.state.customYearHigh} style={this.state.customYearHighStyling} />
						    	</div>
						    	<button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
						    </form>
					    </div>
					  </div>
					</nav>
				</section>
				{display}
			</div>
		)
	}
};

function mapDispatchToProps (dispatch) {
	return bindActionCreators({ loadJSON, grabStocks, changeYear, sortState, customYear }, dispatch);
}

function mapStateToProps ({ stocks }) {
	return { stocks };// {videos } === { videos: videos }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockApp);



