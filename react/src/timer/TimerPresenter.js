import React from 'react'

const TimerPresenter = (props) => {

    // const setLeftTime = (value) => {
    //     if (value == null || value == 0)
    //     return <div/>
    //     return <h1>
    //             Time Left: {value}
    //            </h1>
    // }

    return (
        <div>
        {
            (props.timeLeft !== null && props.timeLeft !== 0) && <h1>{props.timeLeft}</h1>
        }
        </div>
    )
}

export default TimerPresenter