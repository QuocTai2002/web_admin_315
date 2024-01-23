import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {dataMapReducer} from '../Redux/dataMapReducer'
import { modalReducer } from "../Redux/modalReducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    dataMapReducer,
    modalReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;