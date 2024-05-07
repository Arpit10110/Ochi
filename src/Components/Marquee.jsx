import React from 'react';
import { motion } from "framer-motion";
import "../Styles/Marquee.css";

const Marquee = () => {
  return (
    <div className='Marquee-Main'>
      <div className="marquee-Wrapper">
        <motion.h3
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
          animate={{ x: [0 , '-100%'] }}
          transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
        >
          <span>WE ARE OCHI </span>
          <span>WE ARE OCHI </span>
        </motion.h3>
      </div>
    </div>
  );
}

export default Marquee;
