import React from 'react'
import Navbar from "../Components/Navbar.jsx"
import LandingPage from "../Components/LandingPage.jsx"
import Marquee from "../Components/Marquee.jsx"
import About from "../Components/About.jsx"
import Eye from "../Components/Eye.jsx"
import Featured from "../Components/Featured.jsx"
import Review from "../Components/Review.jsx"
import Footer from "../Components/Footer.jsx"
import LocomotiveScroll from 'locomotive-scroll';
const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
   <>
   <Navbar/>
   <LandingPage/>
   <Marquee/>
   <About/>
   <Eye/>
   <Featured/>
   <Review/>
   <Footer/>
   </>
  )
} 

export default Home