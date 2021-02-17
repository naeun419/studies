import React, {useState} from 'react'

import './Example2.css'



// class Example2 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }

//         this.handleButtonPressed = this.handleButtonPressed.bind(this)
//     }

//     handleButtonPressed(value) {
//         value === '-'
//         ? this.setState({ count: --this.state.count })
//         : this.setState({ count: ++this.state.count })
//     }

//     render() {
//         return  (
//             <span>
//                 <button onClick={ () => { this.handleButtonPressed('-') }}>-</button>
//                 <span className='text'>{this.state.count}</span>
//                 <button onClick={ () => {this.handleButtonPressed('+') }}>+</button>
//             </span>
//         )
//     }
// }


// class Example2 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
// ​
//         this.handleButtonPressed = this.handleButtonPressed.bind(this)
//     }
// ​
//     handleButtonPressed(event) {
//         event.target.value === '-'
//         ? this.setState({ count: --this.state.count })
//         : this.setState({ count: ++this.state.count })
//     }
// ​
//     render() {
//         return  (
//             <span>
//                 <input type='button' value='-' onClick={this.handleButtonPressed} />
//                 <button value='-' onClick={this.handleButtonPressed}>-</button>
//                 <span className='text'>{this.state.count}</span>
//                 <button value='+' onClick={this.handleButtonPressed}>+</button>
//                 <input type='button' value='+' onClick={this.handleButtonPressed} />
//             </span>
//         )
//     }
// }


const Example2 = () => {
    const [count, setCount] = useState(0);

    const handleButtonPressed = (value) => {
        value === '-'
        ? setCount(count -1)
        : setCount(count +1)
    }

    return  (
        <span>
            <button onClick={ () => {handleButtonPressed('-') }}>-</button>
            <span className="text">{count}</span>
            <button onClick={ () => {handleButtonPressed('+') }}>+</button>
        </span>
    )
}



export default Example2