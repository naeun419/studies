import React from 'react'

const Presenter = ({ inputChanged, buttonClicked, input, value }) => {
    return (
        <div>
            <input
                type='text'
                value={input}
                onChange={inputChanged}/>
            <button onClick={buttonClicked}>
                확인
            </button>
            <hr/>
            <div>
                Current value : {value}
            </div>
        </div>
    )
}

export default Presenter