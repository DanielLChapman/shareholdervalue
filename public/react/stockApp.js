import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";

import ReduxPromise from "redux-promise";

import StockApp from './components/StockApp';
import stockReducers from "./reducers/stockReducer";


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(stockReducers)}>
    <StockApp />
  </Provider>,
  document.querySelector('#app')
);
