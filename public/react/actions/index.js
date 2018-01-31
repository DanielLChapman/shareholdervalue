import axios from 'axios';

import stocks from '../data/document.json';

export const GRAB_STOCKS = 'GRAB_STOCKS';
export const LOAD_JSON = 'LOAD_JSON';
export const CHANGE_YEAR = 'CHANGE_YEAR';
export const RESET_STATE = 'RESET_STATE';
export const SORT_STATE = 'SORT_STATE';
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

	return {
		type: CHANGE_YEAR,
		payload: option
	};
}

export function resetState () {
	return {
		type: RESET_STATE
	}

}

export function sortState () {
	return {
		type: SORT_STATE
	}
}
