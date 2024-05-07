import React from 'react'
import {Link}from "react-router-dom"
import "../Styles/About.css"
import about from "../assets/about.jpg"
const About = () => {
  return (
    <div className='About-Main'>
      <div className="upperCont-About">
        <h2>Ochi is a strategic partner for fast-growing tech businesses that need to <Link>raise funds</Link>, <Link>sell products</Link>,<Link> explain complex ideas</Link>, and <Link>hire great people.</Link></h2>
      </div>
      <div className="hr"></div>
      <div className="approach-div">
        <div className="approach">
        <h2>Our approach</h2>
        <button>READ MORE</button>
        </div>
        <img src={about} alt="about" />
      </div>
    </div>
  )
}

export default About
