import { ThemeProvider } from './components/ThemeProvider'
import ThemeButton from './components/ThemeButton'
import CounterWithCustomHook from './components/counterWithCustomHook'
import CounterWithReactMemo from './components/counterWithReactMemo'
import './App.css'

function App() {

  return (
    <>
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
      <CounterWithCustomHook />
      <CounterWithReactMemo />
    </>
  )
}

export default App
