import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'

function App() {
const [incerse, setIncerse] = useState(0)
  const [decrese, setDecrese] = useState(100)
  let incersevalue=()=>{
    setIncerse(incerse+1);
  }
  function decresevalue(){
    setDecrese(decrese-1)
  }
  return (
    <>
    <button onClick={incersevalue}>increse:{incerse} </button>
      <button onClick={decresevalue}>decrese:{decrese} </button>
     
      </>
  )
}

export default App
