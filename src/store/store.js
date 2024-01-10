import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import tmpsReducer from "./reducers/tmpsReducer";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  counter: counterReducer,
  tmps: tmpsReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
