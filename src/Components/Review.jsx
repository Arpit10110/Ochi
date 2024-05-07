import React from 'react'
import "../Styles/Review.css"
const Review = () => {
  return (
    <div className='Review-Main'>
      <div className="ochi-Card">
        <div className="inner-img">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Ochi" />
        </div>
        <button>©2019-2022</button>
      </div>
      <div className="clutch-Card">
        <div className="inner-img2">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Clutch" />
        </div>
        <button>RATING 5.0 ON CLUTCH</button>
      </div>
      <div className="Future-Card">
        <div className="inner-img3">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Future" />
        </div>
        <button>BUSINESS BOOTCAMP ALUMNI</button>
      </div>
    </div>
  )
}

export default Review
