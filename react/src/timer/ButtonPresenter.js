import React from 'react'

const ButtonPresenter = (props) => {
    const handleTimer = (event) => {
        return props.handleTimer(props.time)
    }

    return (
        // <div>
        //     {
                <span>
                <button  //style={{float: 'left'}}
                    type="button" 
                    className='btn-default btn'
                    onClick={()=>{handleTimer(props.time)}}>
                        {props.time} seconds
                </button>
                </span>
        //     }
        // </div>
    )
}

export default ButtonPresenter