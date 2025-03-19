import React from 'react'
import './App.css'
import Loginpage from './Components/Loginpage/Loginpage'
import {BrowserRouter as Routes, Route, Router} from 'react-router-dom'

function app(){
    return(
      <Router>
        <Routes>
          <Route path="/" element={<Loginpage />} />
        </Routes>
      </Router>
    )
}

export default app