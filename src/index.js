import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter } from "react-router-dom";

import App from './containers/App';
import './static/sass/style.scss';
import * as serviceWorker from './serviceWorker';
import reducers from './store/reducers';

// Create redux store
const storeWithMiddleWare = applyMiddleware(promise)(createStore);
const app = (
  <Provider store={storeWithMiddleWare(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
