import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

var h1 = React.createElement('h1', null, 'Hello World!!!!!')

ReactDOM.render(

  h1,
  document.getElementById('content')
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
);