import React from 'react'
import './CalltoAction.css'
import about_img from '../../assets/cta.jpg'

const Features2 = () => {
  return (
    <div className='call-to-action'>
        <div className="call-to-action-left">
            <img src={about_img} alt="" className='about_img'/>
        </div>
        <div className="call-to-action-right">
            
            <h2>Start Your Journey with AI Talent Quest Today</h2>
            <p>Whether you're looking for IT talent or an opportunity to 
            prove your skills, we're here to help.
            </p>
            <button className='call-to-action-btn'>Register as a Candidate</button>
            <button className='call-to-action-btn'>Register as a Business</button>
            
        </div>
    </div>
  )
}

export default Features2