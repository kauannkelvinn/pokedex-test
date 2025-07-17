import { createContext, useState } from "react";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";

export const ThemeContext = createContext()

export function ThemeContextProvider({ children }) {
    
    const [theme, setTheme] = useState("light")
    
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    
    const themeObject = theme === "light" ? lightTheme : darkTheme;
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            <ThemeProvider theme={themeObject}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
    
}






