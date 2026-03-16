import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [add, setAdd] = useState(0)
  const [sub, setsub] = useState(0)

  useEffect(() => {
   console.log("welcome to website");//render every time
   
  })
  useEffect(() => {
  alert("welcome to website");//render once
   
  },[])

  useEffect(() => {
 //render when dependency change
   
  },[add])
  
  useEffect(() => {
   //render when sub change
   
  },[sub])
  
  

  return (
    <>
     <button onClick={()=>  setAdd(add+1)}>click me for adding no {add}</button>
     <button onClick={()=>setsub(add-1)}>click me for sub num {sub} </button>
    </>
  )
}

export default App
