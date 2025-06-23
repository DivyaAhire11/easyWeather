import React, { useEffect, useState } from 'react'
import "./getcity.css"
import {APP_NAME,APP_DISCRIPTION } from '../../utils/data'

const Getcity = () => {
        const[cityName , setCityName]=useState();
  
  const saveCityLocally=()=>{
      if(!cityName){
            return alert("Please type your City");
      }
      localStorage.setItem("city",cityName);
      window.location.reload();
  }
  const loadFromLocalStorage=()=>{
    try {
       let city= loadFromLocalStorage.getItem("city");
       if(city){
        window.Location.href="/home"
       }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
     loadFromLocalStorage();
  },[]);
  return (
      <div className='GetCity'>
              <h1 className='Getcity-text'>{APP_NAME}</h1>
              <p className='Getcity-para'>{APP_DISCRIPTION }</p>
            
             <div className='input'>
                <input placeholder='type your city' className='input-city-name' value={cityName} onChange={(e)=> setCityName(e.target.value)}/>
              <button onClick={()=>{saveCityLocally()}} >go</button>
              
             </div>
        </div>
  )
};
export default Getcity