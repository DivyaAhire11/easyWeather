import React from 'react'
import "./day.css"

const DayInfo = ({title,mainInfo="loding..",image}) => {
  return (
    <>
     <div className="right-today-info">
          <h4>{title}</h4>
          <img src={image} className='info-img' />
          <div className='info'>{mainInfo}</div>
      </div>       
    </>
  )
}

export default DayInfo