import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    alert("welcome to wesite every rende")//run every render
   })
  useEffect(() => {
    alert("welcome to wesite  once")//run once
   },[])
  useEffect(() => {
    alert("count increse")//run every render
   },[count])//jab bhi count change hoga tab ye chalega hoga
  

  return (
    <>
      <h1>count value:{count} </h1>
      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
