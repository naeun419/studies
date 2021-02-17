//import React from 'react';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

// class Hook extends React.Component {
//     constructor(props) {
//         super(props)
//         this.launchClock()
//         this.state = {
//             counter: 0,
//             currentTime: (new Date()).toLocaleString()
//         }
//     }
//     launchClock() {
//         setInterval(() => {
//             this.setState({
//                 counter: ++this.state.counter,
//                 currentTime: (new Date()).toLocaleString()
//             })
//         }, 1000)
//     }
//     render() {
//         if (this.state.counter > 2) return
//         return <Logger
//         time={this.state.currentTime}
//         counter={this.state.counter}></Logger>
//     }
// }

const Hook = () => {
    const [counter, setCounter] = useState(0);
    const [currentTime, setTime] = useState(new Date());

    const lauchClock = () => {
        setInterval(() => {
            setCounter(counter + 1)
            setTime(new Date())
        }, 1000)
    }

    useEffect(() => {
        lauchClock()

        
    }, [])

    return (
        <>
        {
            (counter > 2)
            ? null
            : <Logger
                counter={counter}
                currentTime ={currentTime.toLocaleString()} />
        }
        </>
    )
}

const Logger = ({currentTime, counter}) => {

    useEffect(() => {
        console.log('componentDidMount 실행')

        return() => {
            console.log('componentWillUnmount 실행')
        }
    },[])

    useEffect(() => {
        console.log('componentWillUpdate 실행')
        console.log(`time: ${currentTime}`)
        console.log(`counter: ${counter}`)
    }, [currentTime, counter])

    return (
        <div>{currentTime}</div>
    )

}


// class Logger extends React.Component {
//     constructor(props) {
//         super(props)
//         console.log('constructor')
//     }
//     componentWillMount() {
//         console.log('componentWillMount 실행')
//     }
//     componentDidMount(e) {
//         console.log('componentDidMount 실행')
//         console.log('DOM node: ', ReactDOM.findDOMNode(this))
//     }
//     componentWillReceiveProps(newProps) {
//         console.log('componentWillReceiveProps 실행')
//         console.log('새로운 속성: ', newProps)
//     }
//     shouldComponentUpdate(newProps, newState) {
//         console.log('shouldComponentUpdate 실행')
//         console.log('새로운 속성: ', newProps)
//         console.log('새로운 상태: ', newState)
//         return true
//     }
//     componentWillUpdate(newProps, newState) {
//         console.log('componentWillUpdate 실행')
//         console.log('새로운 속성: ', newProps)
//         console.log('새로운 상태: ', newState)
//     }
//     componentDidUpdate(oldProps, oldState) {
//         console.log('componentDidUpdate 실행')
//         console.log('이전 속성: ', oldProps)
//         console.log('이전 상태: ', oldState)
//     }
//     componentWillUnmount() {
//         console.log('componentWillUnmount 실행')
//     }
//     render() {
//         return(
//             <div>{this.props.time}</div>
//         )
//     }
// }


export default Hook