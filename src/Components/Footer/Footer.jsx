import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'> 
        <div className="footer-content">
          <div className='footer-logo'>
          <h2>AI Talent Quest</h2>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>For Job Seekers</a></li>
              <li><a href='#'>For Businesses</a></li>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Our Contact Address</h3>
            <p>Address</p>
            <p>phone no</p>
            <p>Email</p>
          </div>
          
        </div>
        <div className="footer-info">
        <div className="footer-copyright">
          &copy; 2024 AI Talent Quest. All rights reserved
        </div>
        <div className="footer-social">
            <ul>
              <li><a href='#'>fb</a></li>
              <li><a href='#'>insta</a></li>
              <li><a href='#'>linkedin</a></li>
            </ul>
          </div>
        </div>
        
    </div>
  )
}

export default Footer