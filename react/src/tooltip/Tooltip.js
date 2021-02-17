import React, {useState, useRef} from 'react'
//import ReactTooltip from 'react-tooltip'
import './Tooltip.css'

const Tooltip = () => {

    return (

        <div>
        {
            <div>
            <h2>CSS Only Tooltip</h2>
            <br/><br/>
            
            <span data-tooltip-text="THIS IS TOOLTIP!!">TOOLTIP TEST</span>
            <br/><br/>
            
            <span data-tooltip-text="My Heart leaps up when I behold A rainbow in the sky: So was it when my life began; So be it now I am a man So be it when I shall grow old, Or let me die! The Child is father of the Man; And I could wish my days to be Bound each to by natural piety.">THIS IS LONG TOOLTIP</span>
            <br/><br/>
            </div>
            

            // <div>
            //     <h1>Tooltip Widget</h1>
            //     <p data-tip="The book you're reading now">
            //     React Quickly was published in 2017. It's awesome!
            //     </p> 
            // </div>
                
        }
        </div>
    )
}

export default Tooltip