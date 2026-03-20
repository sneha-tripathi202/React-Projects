import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import { themeContext } from '../context/Context'

const Navbar = () => {
  return (
    <><div className='navbar'>
       <h1>Tokkie </h1>
        <Navbar2/>
    </div></>
    
  )
}

export default Navbar
