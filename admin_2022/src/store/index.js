// src/store/index.js
import { createStore } from 'redux';
// 用于支持异步action
// import thunk from "redux-thunk";
import combineReducers from './reducers/index';

export default createStore(combineReducers, undefined);
