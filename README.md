# redux 源码学习
>npm i
>npm run dev
```js
import createStore from "./my-redux/createStore";
import applyMiddleware from "./my-redux/applyMiddleware";
import combineReducers from "./my-redux/combineReducers";
import logger from "./my-middleware/logger";
import thunk from "./my-middleware/redux-thunk";
import allReducers from "./my-reducer";

const applymidddleware = applyMiddleware(logger,thunk);
const reducers = combineReducers(allReducers);
const store = createStore(reducers, applymidddleware)

window.store = store;
```