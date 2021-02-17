import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background: aliceblue;
    &:active,
    &:focus {
      outline: none;
    }
`

const Presenter = ({decreButtonClicked, increButtonClicked, number}) => {
    return (
        <span>
            <StyledButton onClick={decreButtonClicked}>-</StyledButton>
            <span className='text'>{number}</span>
            <StyledButton onClick={increButtonClicked}>+</StyledButton>
        </span>
    )

}

export default Presenter