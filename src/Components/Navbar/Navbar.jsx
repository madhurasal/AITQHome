import React, { useEffect, useState } from 'react'
import './Navbar.css'
//import logo from '../../assets/logo.jpg'

const Navbar = () => {

  const[sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, []);
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        {/*add logo here*/} 
        <h3>AI Talent Quest</h3>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>For Job Seekers</li>
            <li>For Businesses</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar