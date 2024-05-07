import React from 'react'
import "../Styles/LandingPage.css"
import landingDivImg from "../assets/landingDivImg.jpg"
//icon
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
const LandingPage = () => {
  return (
   <>
    <div className='landingMain'>
        <div className="LandingContent">
        <h3>WE CREATE</h3>
        <h3> <img className='landingImg' src={landingDivImg} alt=" " />  EYE-OPENING</h3>
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