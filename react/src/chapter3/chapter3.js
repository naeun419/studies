import React from 'react';
//import ReactDOM from 'react-dom';

//let helloWorldReactElement = <h1>Hello world!</h1>

class Chapter3 extends React.Component {
    getUrl() {
        return'http://webapplog.com'
    }

    render() {
      return (
        //<h1 {...this.props}>Hello {this.props.frameworkName} world@@</h1>
         <div>  
             <p>Your REST API URL is: <a href={this.getUrl()}>{this.getUrl()}</a></p>
             {/* {helloWorldReactElement}
        //     {helloWorldReactElement}
        //   <h1>1. hello world! </h1>
        //   <h1>2. hello world! </h1> */}
         </div>
      )

    }
}

// ReactDOM.render(
//     <div>
//         <Chapter3
//         id='ember'
//         frameworkName='Ember.js'
//         title='A framework for creating ambitious web application' />,
//         <Chapter3
//         id='backbone'
//         frameworkName='Backbone.js'
//         title='Backbone.js gives structure to web application...' />,
//         <Chapter3
//         id='angular'
//         frameworkName='Angular.js'
//         title='Superheroic JavaScript MVW Framework' />
//     </div>,
//     document.getElementById('content')
// )

export default Chapter3