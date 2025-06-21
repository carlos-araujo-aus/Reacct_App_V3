import { ThemeProvider } from './components/ThemeProvider'
import ThemeButton from './components/ThemeButton'
import CounterWithCustomHook from './components/counterWithCustomHook'
import './App.css'

function App() {

  return (
    <>
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
      <CounterWithCustomHook />
    </>
  )
}

export default App
