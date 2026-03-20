import React, { useContext } from 'react'
import { themeContext } from '../context/Context'

const Navbar2 = () => {
    const [theme,settheme]= useContext(themeContext)
  return (
    <div className='nav2'>
      <h2>Home</h2>
      <h2>Pages</h2>
      <h2>About</h2>
      <h2>Contact</h2>
      <h2>{theme}</h2>
    </div>
  )
}

export default Navbar2
