import React from 'react'
import { FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar md:px-[40px] px-[20px]'>
      <Link to='/'>
        <h1 className='md:text-xl text-base font-semibold'>Where in the world</h1>
      </Link>
      <div className='dark-nav'>
        <FaMoon className='text-sm'/>
        <h3 className='pl-3'>Dark mode</h3>
      </div>
    </nav>
  )
}

export default Navbar