import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [char, setchar] = useState(false)
  const [input, setinput] = useState("")
  
const passwordGenerator=()=>{
   
         const password=useCallback(()=>{

          let pass=""
          let letter="abcdedfhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
          if(number) letter+="1234567890"
         if(char)letter+="!@#$%^&*(),/"
         for (let i = 0; i < length; i++) {
           let char=Math.floor(Math.random()*letter.length+1)
             pass=letter.at(char)
         }
        setinput(pass)
         
         },[char,length,number,setinput])
}
  return (
    
     <div className='  absolute w-screen h-screen bg-black flex flex-col pt-40 px-120 '>
      <h1 className='text-4xl  text-white '>Password Generator</h1>
    <div className='w-100 h-50 bg-gray-400 mt-10 rounded-2xl'>
      <div className='mt-3 mx-6'><input className='bg-white h-8 w-70 m-2 p-2' type='text' placeholder='Password'></input>
      <button className='bg-orange-400 p-1.5 w-14 rounded-xl '>copy</button></div>
      <div>
        <input className='mt-3 mx-7' type="range" /><label>length(2)</label>
        <div className='mx-7 mt-4'><div><input type="checkbox" /><label htmlFor="number">Number</label></div>
        <div><input type="checkbox" /><label htmlFor="number">Characters</label></div></div>
      </div>
    </div>
    </div>
    
  )
}

export default App
