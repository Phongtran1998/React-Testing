import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import Promise from "redux-promise";
import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    initialState,
    composeEnhancer(applyMiddleware(Promise, Thunk))
  );

  return <Provider store={store}>{children}</Provider>;
};
