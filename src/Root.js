import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Root = ({ children, initState = {} }) => {
  const store = createStore(
    reducers,
    initState,
    composeEnhancers(applyMiddleware(reduxPromise))
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
