import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Terms from './Components/TermsCondition/Terms'
import Home from './Components/Home'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/terms' element={<Terms/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
      
    </div>
  )
}

export default App
