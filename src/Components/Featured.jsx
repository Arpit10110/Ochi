import React from "react";
import "../Styles/Featured.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const Featured = () => {
  return (
    <div className="Featured-Main">
      <div className="featured-intro">
        <h2>Featured projects</h2>
        <div className="hr-featured"></div>
      </div>
      <div className="card-featured">
        <div className="card1">
          <h3><FiberManualRecordIcon/>FYDE</h3>
          <div className="fyde-card"></div>
        </div>
        <div className="card2">
        <h3><FiberManualRecordIcon/>VISE</h3>
        <div className="vise-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
