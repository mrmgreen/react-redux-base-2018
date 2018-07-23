import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import aReducer from '../reducers';

const store = createStore(aReducer);

ReactDOM.render(
  <Provider store={store}>
    <div>Hello you!s</div>
  </Provider>,
  document.getElementById('root')
);
