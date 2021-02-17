import React from 'react';
//import ReactDOM from 'react-dom';

class Chapter5 extends React.Component {
    confirmLeave(e) {
        let confirmationMessage = '정말 닫으시겠습니까?'
        e.returnValue = confirmationMessage
        return confirmationMessage
    }
    conponentDidMount() {
        console.log('beforeunload 이벤트에 confirmLeave 이벤트 리스너 등록')
        window.addEventListener('beforeunload', this.confirmLeave)
    }
    conponentWillUnmount() {
        console.log('beforeunload 이벤트에 confirmLeave 이벤트 리스너 제거')
        window.removeEventListener('beforeunload', this.confirmLeave)
    }
    render() {
        console.log('Render')
        return <div>
            <p>부모 컴포넌트는 {this.props.secondLeft}초 뒤에 제거된다.</p>
            <input type="text" />
        </div>
    }


    // 예제 5.3
        // constructor(props) {
        //     super(props)
        //     this.state = {
        //         users: []      // render()에서 해당 상태가 존재하는지 확인하지 않아도 됨
        //     }
        // }
        // componentDidMount() {
        //     fetch(this.props['data-url'])     // promise를 이용해 XHR 요청을 보낼 수 있는 통일된 방식
        //         .then((response) => response.json())
        //         .then((users) => this.setState({users: users}))
        // }
        // render() {
        //     return <div className="container">
        //         <h1>List of Users</h1>
        //         <table className="table-striped table-condensed table table-bordered table-hover">
        //             <tbody>{this.state.users.map((user) =>
        //             <tr key={user.id}>
        //                 <td>{user.first_name} {user.last_name}</td>
        //                 <td> {user.email}</td>
        //                 <td> {user.ip_address}</td>
        //             </tr>)}
        //             </tbody>
        //         </table>
        //     </div>
        // }



    // 예제 5.2
    // constructor(props) {
    //     super(props)
    //     console.log('constructor')
    // }
    // componentWillMouse() {
    //     console.log('componentWillMount 실행')
    // }
    // componentDidMount(e) {
    //     console.log('componentDidMount 실행')
    //     console.log('DOM node : ', ReactDOM.findDOMNode(this))
    // }
    // componentReceiveProps(newProps) {
    //     console.log('componentReceiveProps 실행')
    //     console.log('새로운 속성: ', newProps)
    // }
    // shouldComponentUpdate(newProps, newState) {
    //     console.log('shouldComponentUpdate 실행')
    //     console.log('새로운 속성: ', newProps)
    //     console.log('새로운 상태: ', newState)
    //     return true
    // }
    // componentWillUpdate(newProps, newState) {
    //     console.log('componentWillUpdate 실행')
    //     console.log('새로운 속성: ', newProps)
    //     console.log('새로운 상태: ', newState)
    // }
    // componentDidUpdate(oldProps, oldState) {
    //     console.log('componentDidUpdate 실행')
    //     console.log('이전 속성: ', oldProps)
    //     console.log('이전 상태: ', oldState)
    // }
    // componentWillUnmount() {
    //     console.log('componentWillUnmount 실행')
    // }
    // render() {
    //     return (
    //         <div>{this.props.time}</div>
    //     )   
    // }


    // 예제 5.1
    // constructor(props) {
    //     super(props)
    //     this.launchClock()
    //     this.state = {
    //         counter: 0,
    //         currentTime: (new Date()).toLocaleString()
    //     }
    // }
    // launchClock() {
    //     setInterval(() => {
    //         this.setState({
    //             counter: ++this.state.counter,
    //             currentTime: (new Date()).toLocaleString()
    //         })
    //     }, 1000)
    // }
    // render() {
    //     if (this.state.counter > 2) return
    //     return <Logger time={this.state.currentTime}></Logger>
    // }
}

export default Chapter5