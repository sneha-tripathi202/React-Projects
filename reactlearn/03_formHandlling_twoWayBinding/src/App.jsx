import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'

function App() {
 const [input, setInput] = useState("")
 const [email, setemail] = useState("")
 const setref = useRef(null)
 let inputChange =(e)=>{ 
  setInput(e.target.value)
  
 } 
 useEffect(() => {
  setref.current.focus()
 }, [])
 
  return (
    <>
    
     
      <form onSubmit={(e)=>{
       e.preventDefault()
       console.log("Welcome!");
       setInput("") 
       setemail("")      
      }}>
        <h1 ></h1>
        <input type="text"  ref={setref} value={input} placeholder='Enter text'
        onChange={inputChange}/>

        <input type="text" value={email} onChange={(e)=>{
          setemail(e.target.value);
        }} />
        <button>Submit</button>

      </form>
    
    </>
  )
}

export default App
