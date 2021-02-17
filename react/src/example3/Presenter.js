import React from 'react'

import './Example3.css'

const Presenter = ({ count, handleButtonPressed }) => {
    return (
        <span>
            <button onClick={ () => {handleButtonPressed('-') }}>-</button>
            <span className='text'>{count}</span>
            <button onClick={ () => {handleButtonPressed('+') }}>+</button>
        </span>
    )
}

export default Presenter