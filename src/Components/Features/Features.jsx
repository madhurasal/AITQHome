import React from 'react'
import './Features.css'
import feature1 from '../../assets/feature_1.png'
import feature2 from '../../assets/feature_2.jpg'
import feature3 from '../../assets/feature_3.jpg'
import feature4 from '../../assets/feat.png'
const Features = () => {
  return (
    <div className='Features'>
        <div className='Feature'>
            <img src={feature1} alt=''/>
            <div className='caption'>
                <p>AI-Powered Assessments</p>
                <p className='desc'>Candidates are evaluated through a mix of MCQs and AI-
                based video interviews, ensuring only the best talent rises to the top.</p>
            </div>
        </div>
        <div className='Feature'>
            <img src={feature2} alt=''/>
            <div className='caption'>
                <p>Talk to IT Talent</p>
                <p className='desc'>Businesses can interact directly with candidates at $1 
                USD per minute to assess them before making a hiring decision.</p>
            </div>
        </div>
        <div className='Feature'>
            <img src={feature3} alt=''/>
            <div className='caption'>
                <p>Faster Hiring Process</p>
                <p className='desc'>Our platform allows businesses to access prequalified, 
                ranked candidates, cutting down on time-consuming hiring processes.</p>
            </div>
        </div>
        <div className='Feature'>
            <img src={feature4} alt=''/>
            <div className='caption'>
                <p>Opportunities for All Levels</p>
                <p className='desc'>Whether you're a student, freelancer, or experienced IT 
                    professional, AITalentQuest opens doors to full-time and part-time 
                    projects globally.</p>
            </div>
        </div>
    </div>
  )
}

export default Features