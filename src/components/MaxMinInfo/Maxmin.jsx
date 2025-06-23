import React from 'react'
import "./maxmin.css"

const Maxmin = ({title,info}) => {
  return (
       <>
           <div className='maxmin-info'>
           
             <div className='title'>{title}</div> 
             <div className='temp'>
                { title === "Max Temperature" ? <i className="ri-temp-hot-line"></i> :<i className="ri-temp-cold-line"></i>}
                {info}
             </div>
           </div>
       </>
  )
}

export default Maxmin