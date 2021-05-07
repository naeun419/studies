import React from 'react'

import ThemeContext, { themes } from './ThemeContext'
import UserContext from './UserContext'

import Contents from './Contents'

class AppContainer extends React.Component {
    constructor(props) {
        super(props)

        // this.toggleTheme = () => {
        //     this.setState(state => ({
        //         theme: state.theme === '#0000FF'
        //         ? '#ff00ce'
        //         : '#0000FF'
        //     }))
        // }

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark
                ? themes.pink
                : themes.dark,
            }))
        }
        
        this.state = {
            theme: themes.dark,
            toggleTheme: this.toggleTheme,
            userName: {
                name: 'My'
            }
        }
    }

    render() {
        return (
            <>
            <ThemeContext.Provider value={this.state}>
            <UserContext.Provider value={this.state.userName}>
                <Contents />
            </UserContext.Provider>
            </ThemeContext.Provider>
            <Contents />
            </>
        )
    }
}

export default AppContainer