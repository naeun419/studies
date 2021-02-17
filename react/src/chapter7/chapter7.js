import React from 'react';
import ReactDOM from 'react-dom';

class Chapter7 extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.prompt = 'Please enter your email to win $1,000,000.'  // 클래스의 속성 정의
    }
    submit(event) {
        let emailAddress = this.refs.emailAddress
        let comments = this.refs.comments
        console.log(ReactDOM.findDOMNode(emailAddress).value)    // 참조를 이용해서 이메일 주소 입력값에 접근하여 출력함
        console.log(ReactDOM.findDOMNode(comments).value)
    }

    render() {
        return (
        <div className="well">
            <p>{this.prompt}</p>
            <div className="form-group">
                Email: <input ref="emailAddress" className="form-control" type="text"
                placeholder="hi@azat.co"/>
            </div>
            <div className="form-group">
                Comment: <textarea ref="comments" className="form-control" placeholder="I like your website!"/>
            </div>
            <div className="form-group">
                <a className="btn btn-primary" value="Submit" onClick={this.submit}>Submit</a>
            </div>
        </div>
        )
    }
}

// class Chapter7 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {textbook: ''}
//         this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange(event) {
//         console.log(event.target.value)
//         this.setState({textbook: event.target.value})
//     }

//     render() {
//         return <div>
//             <input
//             type="text"
//             onChange={this.handleChane}
//             placeholder="Eloquent TypeScript: Myth or Reality" />
//             <span>{this.state.textbook}</span>
//         </div>
//     }
// }

// class Chapter7 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleRadio = this.handleRadio.bind(this)
//         this.handleCheckbox = this.handleCheckbox.bind(this)
//         this.handleSelectChange = this.handleSelectChange.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//         this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.state = {
//             radioGroup: {
//                 angular: false,
//                 react: true,
//                 polymer: false
//             },
//             checkboxGroup: {
//                 node: false,
//                 react: true,
//                 express: false,
//                 mongodb: false
//             },
//             selectedValue: 'node', 
//         }
//     }
//     handleRadio(event) {
//         let obj = {}    // erase other radios
//         obj[event.target.value] = event.target.checked   // true
//         this.setState({radioGroup: obj})
//     }
//     handleCheckbox(event) {
//         let obj = Object.assign(this.state.checkboxGroup)
//         obj[event.target.value] = event.target.checked
//         this.setState({checkboxGroup: obj})
//     }
//     handleSelectChange(event) {
//         this.setState({selectedValue: event.target.value})
//     }
//     handleChange(event) {    // 이벤트 핸들러 정의
//         this.setState({emailValue: event.target.value})
//         console.log(event.target.value)
//     }
//     handleFirstNameChange(event) {
//         this.setState({firstName: event.target.value})
//     }
//     handleSubmit(event) {
//         fetch(this.props['data-url'], {method: 'POST', body: JSON.stringify(this.state)})
//         .then((response)=>{return response.json()})
//         .then((data)=>{console.log('Submitted: ', data)})
//     }

//     render() {
//         return <form>
//             <input type="radio"
//             name="radioGroup"   // 그룹화하려면 name값을 통일해야 함
//             value='angular'
//             checked={this.state.radioGroup['angular']}   // 상태를 checked 값으로 사용함. 객체의 속성이나 상태 객체에 있는 속성을 사용할 수도 있음
//             onChange={this.handleRadio}/>
//             <input type="radio"
//             name="radioGroup"
//             value='react'
//             checked={this.state.radioGroup['react']}   // onChange에서 사용자 조작을 감시. onChange에 이벤트 핸들러 넘겨줌
//             onChange={this.handleRadio}/>
//             <input type="radio"
//             name="radioGroup"
//             value='polymer'
//             checked={this.state.radioGroup['polymer']}
//             onChange={this.handleRadio}/>

//             <input type="checkbox"
//             name="checkboxGroup"
//             value='node'
//             checked={this.state.checkboxGroup['node']}
//             onChange={this.handleCheckbox}/>
//             <input type="checkbox"
//             name="checkboxGroup"
//             value='react'
//             checked={this.state.checkboxGroup['react']}
//             onChange={this.handleCheckbox}/>
//             <input type="checkbox"
//             name="checkboxGroup"
//             value='express'
//             checked={this.state.checkboxGroup.express}   // 키가 유효한 자바스크립트 이름이면 점 표기법을 사용할 수 있음
//             onChange={this.handleCheckbox}/>
//             <input type="checkbox"
//             name="checkboxGroup"
//             value='mongodb'
//             checked={this.state.checkboxGroup['mongodb']}
//             onChange={this.handleCheckbox}/>

//             <select
//             value={this.state.selectedValue}
//             onChange={this.handleSelectChange}>
//                 <option value="ruby">Ruby</option>
//                 <option value="node">Node</option>
//                 <option value="python">Python</option>
//             </select>

//             <input type="text"
//             onChange={this.handleChange}
//             defaultValue="hi@azat.co" />

//             <input name="firstName"
//             onChange={this.handleFirstNameChange}
//             type="text"/>

//             <input type="button"
//             onClick={this.handleSubmit}
//             value="Submit"/>
//         </form>
//     }
// }

export default Chapter7