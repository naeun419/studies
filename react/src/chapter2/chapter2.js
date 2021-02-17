import React from 'react';
//import ReactDOM from 'react-dom';


let h1 = React.createElement('h1', null, 'Hello World chap2!')

class Chapter2 extends React.Component {

    render() {
      return (
        //   'h1',
        //   this.props,
        //   'Hello ' + this.props.frameworkName + ' World!!'

         React.createElement('div', null, h1, h1)

      )
      //return React.createElement('h1', this.props, 'Hello ' + this.props.frameworkName + ' World!!!')
    }
}

// ReactDOM.render(
//     React.createElement(
//         'div',
//         null,
//         React.createElement(Chapter2, {
//             id: 'ember',
//             frameworkName: 'Ember.js',
//             title: 'A framework for creating ambitious web applications.'
//         }),
//         React.createElement(Chapter2, {
//             id: 'backbone',
//             framworkName: 'Backbone.js',
//             title: 'Backbone.js gives structure to web applications...'
//         }),
//         React.createElement(Chapter2, {
//             id: 'angular',
//             frameworkName: 'Angular.js',
//             title: 'Superheroic JavaScript MVW Framework'
//         })
//     ),
//     document.getElementById('content')
// )

export default Chapter2