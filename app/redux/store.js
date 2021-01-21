import { applyMiddleware, createStore } from "redux";
import rootReducer from './reducers';

const { default: thunk } = require("redux-thunk");

const middleware = [thunk];
const initialState = {};

export default createStore(rootReducer, initialState, applyMiddleware(...middleware));

