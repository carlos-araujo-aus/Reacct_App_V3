import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'


function ThemeButton() {
    const { theme , toggleTheme } = useContext(ThemeContext)
  
    return (
      <>
        <h2>Theme Button with Provider</h2>
        <button 
          onClick={toggleTheme}
          style={{ 
            backgroundColor: theme === "light" ? "white" : "black", 
            color: theme === "light" ? "black" : "white"}}>
          Change Theme
        </button>
      </>
    )
  }

export default ThemeButton;