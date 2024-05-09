import React, { useEffect, useState } from "react";
import "../Styles/Eye.css";

const Eye = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotation(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div  data-scroll data-scroll-speed="-.4.7" className="eye-main">
      <div className="eye-container">
        <div className="eye-white">
          <div className="eye-black">
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
              className="eye-line"
            >
              <div className="eye-inner"></div>
            </div>
          </div>
        </div>
        <div className="eye-white">
          <div className="eye-black">
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
              className="eye-line"
            >
              <div className="eye-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eye;
