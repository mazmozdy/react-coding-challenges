import React from 'react';


const DarkModeContext = React.createContext({
    theme: {},
    turnDark: () => { },
    turnLight: () => { }
})

// - this provider will save us a lot of work and make it 
// easier to use our context as a quick-start template
// - this also enable use to use useState and manipulate 
// the DarkModeContext values

export const DarkModeWrapper = (props) => {
    const [theme, setTheme] = React.useState({ isDark: false, class: "" });

    const darkModeHandler = () => {
        setTheme({ isDark: true, class: "dark-mode " })
    }
    const lightModeHandler = () => {
        setTheme({ isDark: false, class: "" })
    }

    return (<DarkModeContext.Provider value={{ turnLight: lightModeHandler, turnDark: darkModeHandler, theme: theme }}>
        {props.children}
    </DarkModeContext.Provider>)
}

export default DarkModeContext;