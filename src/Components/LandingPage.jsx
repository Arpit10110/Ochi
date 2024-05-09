import React from 'react'
import "../Styles/LandingPage.css"
import landingDivImg from "../assets/landingDivImg.jpg"
//icon
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
import { easeIn, easeOut, motion } from 'framer-motion';
const LandingPage = () => {
  return (
   <>
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='landingMain'>
        <div className="LandingContent"> 
        <h3>WE CREATE</h3>
        <h3>
           <motion.img initial={{width:"0%"}} animate={{width:"16rem"}} transition={{ease:[0.76,0,0.24,1], duration:1}} className='landingImg' src={landingDivImg} alt=" " />  
           EYE-OPENING</h3>
        <h3>PRESENTATIONS</h3>
        </div>
        <div className="hr"></div>
        <div className="belowUnderline">
          <h3>For public and private companies</h3>
          <h3>From the first pitch to IPO</h3>
          <div className="startProject"><h3>START THE PROJECT</h3><button className="arrow"><CallMadeRoundedIcon/></button> </div>
        </div>
    </div>
   </>
  )
}

export default LandingPage