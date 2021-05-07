import { createContext } from 'react'

export const themes = {
    pink: {
        background: '#ff00ce' // pink
    },
    dark: {
        background: '#0000FF'   //blue 
    },
    default: {
        background: '#cdfbdd'   // 연두색?
    }
}

// const ThemeContext = createContext('#cdfbdd')

const ThemeContext = createContext({
    // theme: '#cdfbdd',
    theme: themes.default,
    toggleTheme: () => {},
})

export default ThemeContext