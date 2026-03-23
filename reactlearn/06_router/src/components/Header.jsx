import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='header py-10 px-20'>
        <div >
          <Link className='no-underline text-white text font-bold text-2xl' to="/">Takiee..</Link></div>
        <div className=''>
          <Link className='no-underline mr-4 text-white text font-bold' to='/'>Home</Link>
        <Link className='no-underline mr-4 text-white text font-bold'  to='/product'>Product</Link>
        <Link className='no-underline mr-4 text-white text font-bold' to='/contact'>Contact</Link>
        <Link className='no-underline mr-4 text-white text font-bold' to='/about'>About</Link>
        <Link className='no-underline mr-4 text-white text font-bold' to='/login'>Login</Link></div>


      </div>
    </div>
  )
}

export default Header
