import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'

// const LoadWebsite = (Component) => {
//     class _LoadWebsite extends React.Component {
//         constructor(props) {
//             super(props)
//             this.state ={label: 'Run'}
//             this.state.handleClick = this.handleClick.bind(this)
//         }
//         getUrl() {
//             return 'http://reactquickly.co/'
//         }
//         handleClick(event) {
//             let iframe = document.getElementById('frame').src = this.getUrl()
//         }
//         componentDidMount() {
//             console.log(ReactDOM.findDOMNode(this))
//         }
//         render() {
//             console.log(this.state)
//             return <Component {...this.state} {...this.props} />
//         }
//     }
//     _LoadWebsite.displayName = 'EnhancedComponent'
//     return _LoadWebsite
// }

class Chapter8 extends React.Component {
    render() {
        let number = 1
        return(
            <div>
                <Button buttonLabel="Start" />
                <Button />
                <Button title={number}/>
                <Button />
                <Button email="not-a-valid-email"/>
                <Button email="hi@azat.co"/>
            </div>
        )
    }
}

class Button extends React.Component {
    render() {
        return <button className="btn">{this.props.buttonLabel}</button>
    }
}
Button.defaultProps = {buttonLabel: 'Submit'}

Button.propTypes = {
    handler: PropTypes.func.isRequired,
    title: PropTypes.string,
    email(props, propName, componentName) {
        let emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        if (!emailRegularExpression.test(props[propName])) {
            return new Error('Email validation failed!')
        }
    }
}

export default Chapter8