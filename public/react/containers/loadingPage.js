import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { grabStocks } from '../actions/index';

class LoadingPage extends Component {
	constructor (props) {
		super(props);
		this.state = {
			currentlyLoading: -1,
			loaded: false
		};
		this.renderLoadingInformation = this.renderLoadingInformation.bind(this);
	}

	renderLoadingInformation() {
		return (
			<table>
				<thead>
					<tr>
						<th scope="col">symbol</th>
						<th scope="col">loaded</th>
					</tr>
				</thead>
				<tbody>
					{ 
						this.props.stocks.map((x) => {
							let returnTD = null;
							if (x.tsv != 0) {
								returnTD = <h5 className="symbol-check">✓</h5>
							} else {
								returnTD = <h5 className="symbol-times">x</h5>
							}
							return (
								<tr key={x.symbol}>
									<td scope="row">{x.symbol}</td>
									<td>{returnTD}</td>
								</tr>
							)
						}) 
					}
				</tbody>
			</table>
		)
	}

	render () {
		let display = this.renderLoadingInformation()
		return (
			<Fragment>
				<section className="loading-title">
					<h2>Please Wait. <br />We are loading the information now!</h2>
				</section>
				<section className="loading-table">
					{display}
				</section>
			</Fragment>
		)
	}
}


function mapDispatchToProps (dispatch) {
	return bindActionCreators({ grabStocks }, dispatch);
}

function mapStateToProps ({ stocks }) {
	return { stocks };// {videos } === { videos: videos }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage);