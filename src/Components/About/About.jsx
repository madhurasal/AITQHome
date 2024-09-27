import React from 'react'
import './About.css'
import about_img from '../../assets/emp_feature.png'

const About = () => {
  return (
    <div className='home-about'>
        <div className="home-about-left">
            <img src={about_img} alt="" className='about_img'/>
        </div>
        <div className="home-about-right">
            <h3>About AI Talent Quest</h3>
            <h2>We Are Your Trusted Partner</h2>
            <p>At AI Talent Quest, we are more than just a job portal-we are a catalyst for innovation, 
                connecting the brightest AI minds with groundbreaking opportunities. We believe in the 
                power of artificial intelligence to transform industries and shape the future, and our mission is to empower AI professionals 
                and companies to achieve extraordinary success together.
            </p>
            <p>AI Talent Quest is your premier destination for connecting top AI talent with leading companies around the world.Using state-of-the-art algorithms and a keen understanding of the AI landscape, we create perfect matches. 
                Our process is more than just a job search; it's a quest to find your ideal fit.</p>
            <p>AI Talent Quest was born from a passion for AI and a desire to create meaningful connections. Our founders, seasoned AI enthusiasts, and industry experts, embarked on a mission to transform how AI talent and opportunities converge. Today, we are proud to have built a platform that not only 
                connects but also inspires and propels the AI community forward. We are not just a platform-we're a partner in your success. </p>    

        </div>
    </div>
  )
}

export default About