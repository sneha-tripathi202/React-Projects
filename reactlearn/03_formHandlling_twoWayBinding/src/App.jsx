import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'

function App() {
 const [input, setInput] = useState("")
 let inputChange =(e)=>{ 
  setInput(e.target.value)
 }
  return (
    <>
    
     
      <form onSubmit={(e)=>{
       e.preventDefault()
       console.log("Welcome!");
       setInput("")       
      }}>
        <input type="text"  value={input} placeholder='Enter text'
        onChange={inputChange}/>
        <button>Submit</button>
      </form>
    
    </>
  )
}

export default App
