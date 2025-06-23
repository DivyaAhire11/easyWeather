import React, { useEffect, useState } from 'react'
import "./home.css"
import axios from 'axios'

const API_ID = import.meta.env.VITE_API_ID;

import CLOUD_IMG from "../../assets/cloud.png"
import CITY_IMG from "../../assets/City.jpg"
import PROFILE_IMG from "../../assets/profile.png"
import LATITUDE_IMG from "../../assets/latitude.png"
import LONGITUDE_IMG from "../../assets/longitude.png"
import PRESSURE_IMG from "../../assets/pressure.png"
import HUMIDITY_IMG from "../../assets/humidity.png"

import DayInfo from '../../components/DayInfo/DayInfo'
import Windspeed from '../../components/WindSpeed/Windspeed'
import Maxmin from '../../components/MaxMinInfo/Maxmin'
import Getcity from '../../views/Getcity/Getcity';

const Home = () => {

    const[city , setcity]=useState();
    const[weather , setweather]=useState();
    const[showGetCity , setshowGetCity] = useState(true);


   const loadweather = async() => {
      try {
          const result =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_ID}&units=metric`);
         
          setweather(result.data);
        
      } catch (error) {
         console.log(error);
      }
   }

   const loadCityFromLocally = () =>{
      let city = localStorage.getItem("city");
      if(city){
         setcity(city);
         loadweather();
      }else{
         window.location.href="/";
      }
   }
   useEffect(()=>{
      loadCityFromLocally();
   },[]);
   useEffect(()=>{
      loadweather();
   },[city]);
  return (
    <>
       <div className="main-container">
          <div className="left-container">
              <div className="search-box">
                   <i className="ri-search-line"  onClick={()=>loadweather()}></i>
                  <input placeholder='Search for places....' className='city-input' value={city} onChange={(e)=>{setcity(e.target.value)}} />           
         
              </div>
              <div className='cloud-img'>
                  <img src ={CLOUD_IMG}/>
              </div>
              <div>

                 <p className='left-cont-temp'>{weather?.main?.temp}<i className="ri-celsius-fill"></i></p>
                 <hr />
                 <div className='city-img'>
                    <img src={CITY_IMG} />
                    <p className='left-city-name'>{city}</p>
                 </div>
              </div>
          </div>

          <div className="right-container">

              <div className='head-block'>
               <div className='days'>
                 <span>Today</span>
                 <span>Week</span>
              </div>
              <div className='temp-icon'>
                  <span><i className="ri-celsius-line"></i></span>
                   <span><i className="ri-fahrenheit-line"></i></span>
                  <img src={PROFILE_IMG} />
              </div>
              </div>
               
             
             <div className="Today-info">
               <DayInfo title="Longitude" mainInfo={weather?.coord?.lon +"lon"}  image={LONGITUDE_IMG}/>
               <DayInfo title="Latitude" mainInfo={weather?.coord?.lat +"lat"} image={LATITUDE_IMG}/>
               <DayInfo title="Humidity" mainInfo={weather?.main?.humidity+"%"} image={HUMIDITY_IMG} />
               <DayInfo title="Pressure" mainInfo={weather?.main?.pressure +"hpa"} image={PRESSURE_IMG} />
           </div>
         
            
             <div className='highlight-text'>
        <h1>Today's Highlight</h1>
        </div>    
          <div className='highlight-div'>
           <Windspeed weatherInfo={weather?.wind?.speed} />
           <div className='right-info-block' >
             <Maxmin title="Max Temperature" info={weather?.main?.temp_max} />
              <Maxmin title="Min Temperature" info={weather?.main?.temp_min} />
           </div>
          
          </div>
         </div> 
    </div>
    </>
  )
}

export default Home
