import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";


export function ThemeToggleButton() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button onClick={toggleTheme}>
            Alternar para tema {theme === "light" ? "escuro" : "claro"}
        </button>

    )

};
