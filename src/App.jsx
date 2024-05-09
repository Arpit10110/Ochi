import React from 'react'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import "./Styles/Styles.css"
import LocomotiveScroll from 'locomotive-scroll';
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
   </Router>
  )
}

export default App