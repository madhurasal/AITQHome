import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/homeHero'
import Title from './Title/Title'
import About from './About/About'
import Features from './Features/Features'
import Features2 from './CallToAction/CalltoAction'
import Pricing from './Pricing/Pricing'
import Footer from './Footer/Footer'
import './Pricing/PricingApp.css'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
        <About/>
        <Title subTitle='Key Features' title='Why Choose AI Talent Quest?'/>
        <Features/>
      </div>
      
      <div>
        <div className='container'>
          <Title subTitle='For Job Seekers' title='Our Pricing Plans'/>
            {/* Cards here */}
            <div className="pricing-cards">
              <Pricing
                title="Free"
                price= "0"
                storage="MCQ Test"
                users="AI Video Interview"
                sendUp="AI Resume Builder"
                users2= "Job Matching"
              />
              
              <Pricing
                title="Premium"
                price="2000"
                storage="Unlimited Attempts"
                users="Salary Starting From 0 To 3 Years: 3 LPA"
                sendUp="3 To 6 Year: 6 LPA"
                users2= "6 To 9 Year: 9 LPA"
              />
            </div>
        </div>    
      </div>
    
      
      <div>
        <div className="container">
          <Title subTitle='For Businesses' title='Our Pricing Plans'/>
            {/* Cards here */}
            <div className="pricing-cards">
              <Pricing
                title="Free"
                price= "0"
                storage="MCQ Test"
                users="AI Video Interview"
                sendUp="AI Resume Builder"
                users2= "Job Matching"
              />
              
              <Pricing
                title="Premium"
                price="1725"
                storage="3 Attempts/ Reexam"
                users="Salary Starting From First Year: 2.4 LPA"
                sendUp="Second Year: 6 LPA"
                users2= "Third Year: 9 LPA"
              />
            </div>
        </div>
        <Features2/>    
      </div>
      
      <Footer/>
      
    </div>
  )
}

export default Home
