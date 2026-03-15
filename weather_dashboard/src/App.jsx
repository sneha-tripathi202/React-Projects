import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-screen  h-screen flex justify-center  items-center bg-linear-65 from-purple-black-300 to-black-200'>
      <div className='lg:w-[30vw] lg:h-[40vw]  rounded-xl bg-linear-to-r from-purple-600 shadow-xl to-pink-500 '>
        <h2 className=' text-3xl  font-bold lg:mt-4 lg:mx-12 text-gray-200'> Weather Dashboard</h2>
      </div>
    </div>
       
    </>
  )
}

export default App
