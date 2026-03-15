import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import  Card  from "./components/Card1.jsx"
import Card1 from './components/Card1.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card1 name="sneha" age={21} />
      </>
  )
}

export default App
