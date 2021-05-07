import React, { useContext } from 'react'

import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

import Styled from 'styled-components'

const TButton = Styled.button`
    padding: 40px 40px 40px 40px
    background-color: ${props => props.backColor};
`

const Contents = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { name } = useContext(UserContext)

    return (
        <>
        <div>
            {/* <button style={{background: theme}}>Hi</button> */}
                <TButton onClick={toggleTheme} backColor={theme.background}>
                    HI1
                </TButton>
            <span>{name}</span>
        </div>
        <div>
            <TButton>
                HI2
            </TButton>
            <span>{name}</span>
        </div>
        </>
    )
}

export default Contents