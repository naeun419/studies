import React from 'react';

// 예제 6.11
class Chapter6 extends React.Component {
    constructor(props) {
        super(props)
        this.handleResize = this.handleResize.bind(this)
        let order = props.order
        let i = 1
        this.state = {
            outerStyle: this.getStyle(4,i),
            innerStyle: this.getStyle(1,i),
            selectedStyle: this.getStyle(2,i),
            taggerStyle: {top: order*20, width: 25, height: 25}
        }
    }
    getStyle(i, m) {
        let value = i*m
        return {
            top: value,
            bottom: value,
            left: value,
            right: value,
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }
    conponentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }
    handleResize(event) {
        let w = 1 + Math.round(window.innerWidth / 300)
        this.setState({
            taggerStyle: {top: this.props.order*w*10, width: w*10, height: w*10},
            textStyle: {left: w*13, fontSize: 7*w}
        })
    }

    render() {
        return <div>
            <div className="radio-tagger" style={this.state.taggerStyle}>
                <input type="radio" name={this.props.name} id={this.props.id} />
                <label htmlFor={this.props.id}>
                    <div className="radio-text" style ={this.state.textStyle}> {this.props.label}</div>
                    <div className="radio-outer" style={this.state.outerStyle}>
                        <div className="radio-inner" style={this.state.innerStyle}>
                            <div className="radio-selected" style={this.state.selectedStyle} />
                        </div>
                    </div>
                </label>
            </div>
        </div>
    }
}


//  예제 6.7
// class ClickCounterButton extends React.Component {
//     render() {
//         return <button
//         onClick={this.props.handler}
//         className="btn btn-info">
//             Don't touch me with your dirty hands!
//         </button>
//     }
// }

// const ClickCounterButton = (props) => {
//     return <button
//     onClick={props.handler}
//     className="btn-btn-info">
//         Don't touch me with your dirty hands!
//     </button>
// }

// class Counter extends React.Component {
//     render() {
//         return <span>Clicked {this.props.value} times. </span>
//     }
// }

// 예제 6.8
// class Chapter6 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleClick = this.handleClick.bind(this)
//         this.state ={ counter: 0}
//     }
//     handleClick(event) {
//         this.setState({counter: ++this.state.counter})
//     }
//     render() {
//         return (
//             <div>
//                 <ClickCounterButton handler={this.handleClick}/>
//                 <br/>
//                 <Counter value = {this.state.counter} />
//             </div>
//         )
//     }
// }

// 예제 6.6
// class Chapter6 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             counter : 0
//         }
//     }
//     handleClick(event) {
//         this.setState({counter: ++this.state.counter})
//     }
//     render() {
//         return (
//             <div>
//                 <button
//                 onClick={this.handleClick.bind(this)}
//                 className="btn btn-primary">
//                     Don't click me {this.state.counter} times!
//                 </button>
//             </div>
//         )
//     }
// }
// 예제 6.4
// class Chapter6 extends React.Component {
//     handleMouseOver(event) {
//         console.log('mouse is over with event')
//         console.dir(event.target)
//     }
//     render() {
//         return <div>
//             <div
//             style={{border: '1px solid red'}}
//             onMouseOver={this.handleMouseOver.bind(this)}>
//                 Open DevTools and move your mouse cursor over here
//             </div>
//         </div>
//     }
// }

// 예제6.3
// class Chapter6 extends React.Component {
//     render() {
//         return <div>
//             <div
//             style={{border: '1px solid red'}}
//             onMouseOver={((event) => {
//                 console.log('mouse is over with event')
//                 console.dir(event)})}>
//                     Open DevTools and move your mouse cursor over here
//                 </div>
//         </div>
//     }
// }

// 예제 6.2
// class Chapter6 extends React.Component {
//     render() {
//         return <div>
//             <div
//             style={{border: '1px solid red'}}
//             onMouseOverCapture={((event) => {
//                 console.log('mouse over on capture event')
//                 console.dir(event, this)}).bind(this)}
//             onMouseOver={((event) => {
//                 console.log('mouse over on bubbling event')
//                 console.dir(event, this)}).bind(this)}>
//                     Open DevTools and move your mouse cursor over here
//                 </div>
//         </div>
//     }
// }

// 예제 6.1
// class Chapter6 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleSave = this.handleSave.bind(this)  // 클래스에 대한 this 문맥을 바인딩하고, 이 this를 사용하여 이벤트 핸들러에서 클래스를 참조함
//     }
//     handleSave(event) {
//         console.log(this, event)
//     }

//     handleSave(event) {
//         console.log(this, event)
//     }

//     render() {
//         return <button onClick={this.handleSave}>
//         Save
//         </button>
//     }
// }


export default Chapter6