import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='text-center  '> 
            <Link className=' font-bold m-5 text-xl underline' to='/men'>Men</Link>
         <Link className=' font-bold m-5  text-xl underline' to='/women'>Women</Link></div>
          <h1>Product</h1>
    </div>
  )
}

export default Product
