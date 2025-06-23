import React from 'react'
import "./speed.css"
import WIND_IMG from "../../assets/wind.png"

const Highlight_Info = ({weatherInfo}) => {
  return (
    <>
       <div className='left-info-block'>
                  <h3>WindSpeed</h3>
                   <img src={WIND_IMG} className='wind-img'/>
                   <div className='wind-speed'><i className="ri-wireless-charging-line"></i>{weatherInfo}</div>
                   
             </div> 
        
    </>
  )
}

export default Highlight_Info