import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

let h1 = React.createElement('h1', null, 'Hello World!@?')

class HelloWorld extends React.Component {
  render() {
    return React.createElement('h1', this.props, 'Hello ' + this.props.frameworkName + ' World!!!')
  }
}

ReactDOM.render(

    React.createElement(
      'div',
      null,
      React.createElement(HelloWorld, {
        id: 'ember',
        frameworkName: 'Ember.js',
        title: 'A framework for creating ambitious web application.'}),
      React.createElement(HelloWorld, {
        id: 'backbone',
        frameworkName: 'Backbone.js',
        title: 'Backbone.js gives structure to web application...'}),
      React.createElement(HelloWorld, {
        id: 'angular',
        frameworkName: 'Angular.js',
        title: 'Superheroic JavaScript MVW Framework'})
    ),
    document.getElementById('content')


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
);