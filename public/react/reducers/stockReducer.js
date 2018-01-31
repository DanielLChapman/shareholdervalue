import { combineReducers } from 'redux';
import StockReducer from './reducer_stock';
import YearReducer from './reducer_year';

const rootReducer = combineReducers({
	stocks: StockReducer,
	year: YearReducer
});

export default rootReducer;
