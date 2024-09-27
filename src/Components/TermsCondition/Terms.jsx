import React from 'react'
import './Terms.css'
import Navbar from '../Navbar/Navbar'
import Content from './Content'
import Footer from '../Footer/Footer'
import TermsHero from './TermsHero'

const Terms = () => {
  return (
    <div>
        <Navbar/>
        <TermsHero/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default Terms