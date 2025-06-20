import { ThemeProvider } from './components/ThemeProvider'
import ThemeButton from './components/ThemeButton'
import './App.css'

function App() {

  return (
    <>
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
    </>
  )
}

export default App
