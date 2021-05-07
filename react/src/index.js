import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
//import store from './counterredux/Store'
//import store from './project1/Store'
import store from './project2/Store'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('content')

);