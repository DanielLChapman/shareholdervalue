import axios from 'axios';

import stocks from '../data/document.json';

export const GRAB_STOCKS = 'GRAB_STOCKS';
export const LOAD_JSON = 'LOAD_JSON';
export const CHANGE_YEAR = 'CHANGE_YEAR';
export const SORT_STATE = 'SORT_STATE';
export const CUSTOM_YEAR = 'CUSTOM_YEAR';

export var customYearBool = false;
export var customYearLow = '2015-01-01';
export var customYearHigh = '2018-01-01';
export var yearTest = 3;

export function loadJSON () {
	const data = stocks.stocks;

	return {
		type: LOAD_JSON,
		payload: data
	}
}

export function grabStocks (stock, years) {
	let url = `/fetch?stock=${stock}`;
	let data = axios.get(url)


	return {
		type: GRAB_STOCKS,
		payload: data
	};
}

export function changeYear (option) {
	yearTest = option;
	customYearBool = false;

	return {
		type: CHANGE_YEAR,
		payload: option
	};
}

export function sortState () {
	return {
		type: SORT_STATE
	}
}

export function customYear (low, high) {
	customYearBool = true;
	customYearLow = low;
	customYearHigh = high;

	return {
		type: CUSTOM_YEAR
	};
}
