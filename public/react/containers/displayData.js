import React, { Component, Fragment } from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class DisplayPage extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		let reactTable = null;
		let data = this.props.stocks;
		data.map((x, i) => {
			x.index = i+1;
		})
		const columns = [
			{
				Header: 'Index',
				accessor: 'index',
			}, {
				id: 'Symbols',
				Header: 'Indentity',
				accessor: d => {
					if (this.props.displaySymbol) {
						return d.symbol;
					} else {
						return d.name
					}
				}

			},
			{
				Header: 'Current Price',
				accessor: 'current',
			},
			{
				Header: 'Historic Price',
				accessor: 'historic',
			},
			{
				Header: 'Dividends',
				accessor: 'dividends',
			},
			{
				Header: 'Yield',
				accessor: 'yield',
			},
			{
				Header: 'Price Appreciation',
				accessor: 'appreciation',
			},
			{
				Header: 'TSV',
				accessor: 'tsv',
			}
		];
		if (this.props.stocks != null) {
			reactTable = 
			<div>
				<ReactTable data={data} columns={columns} />
			</div>
		}

		return (
			<Fragment>
				<section className="display-table">
					{reactTable}

				</section>
			</Fragment>
		)
	}
}


function mapDispatchToProps (dispatch) {
	return bindActionCreators({  }, dispatch);
}

function mapStateToProps ({ stocks }) {
	return { stocks };// {videos } === { videos: videos }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPage);