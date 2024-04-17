import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {dataMapReducer} from '../Redux/Reducer/dataMapReducer'
import { modalReducer } from "../Redux/Reducer/modalReducer";
import {userReducer} from "../Redux/Reducer/userReducer"
import thunk from "redux-thunk";
const rootReducer = combineReducers({ // khai báo store Reducer
    dataMapReducer,
    modalReducer,
    userReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;