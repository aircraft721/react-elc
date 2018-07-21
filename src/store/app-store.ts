import {applyMiddleware, createStore, Store} from "redux";
import thunk from "redux-thunk";
import {reducer} from './reducers/reducer'
// import {} from "./reducers";
import {GlobalState} from "./app-state";

export const appStore: Store<GlobalState> =
	createStore(reducer, applyMiddleware(thunk));