import createStore from "./my-redux/createStore";
import combineReducers from "./my-redux/combineReducers";
import allReducers from "./my-reducer";
import { addCount } from "./my-actions/count";
const reducers = combineReducers(allReducers);
const store = createStore(reducers);
window.store = store;
store.dispatch(addCount(1));
