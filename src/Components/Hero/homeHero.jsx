import React from 'react'
import './homeHero.css'

const Hero = () => {
  return (
    <div className='home-hero container'>
        <div className="home-hero-text">
            <h1>Discover & Hire the Best IT Talent Faster with AI-powered 
            Solutions</h1>
            <p>Where talent meets opportunity. Candidates are ranked and 
              prequalified using AI, while businesses hire faster with instant access to top 
            talent.</p>
            <button className='btn'>Get Started as a Candidate</button>
            <button className='btn'>Hire Prequalified Talent</button>
          
        </div>
    </div>
  )
}

export default Hero