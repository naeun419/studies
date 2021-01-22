import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//let h1 = React.createElement('h1', null, 'Hello World!@?')
//let helloWorldReactElement = <h1>Hello World!?!</h1>

// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>1. hello world! </h1>
//         <h1>2. hello world! </h1>
//       </div>
//     )
//     //return React.createElement('h1', this.props, 'Hello ' + this.props.frameworkName + ' World!!!')
//   }
// }


ReactDOM.render(

  //helloWorldReactElement,
  // <HelloWorld/>,
  <App />,
  document.getElementById('content')

    // React.createElement(
    //   'div',
    //   null,
    //   React.createElement(HelloWorld, {
    //     id: 'ember',
    //     frameworkName: 'Ember.js',
    //     title: 'A framework for creating ambitious web application.'}),
    //   React.createElement(HelloWorld, {
    //     id: 'backbone',
    //     frameworkName: 'Backbone.js',
    //     title: 'Backbone.js gives structure to web application...'}),
    //   React.createElement(HelloWorld, {
    //     id: 'angular',
    //     frameworkName: 'Angular.js',
    //     title: 'Superheroic JavaScript MVW Framework'})
    // ),
    // document.getElementById('content')


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
);