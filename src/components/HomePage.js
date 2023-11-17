import React, { useEffect, useState } from 'react'
import "./HomePage.css";
import prize from "./images/pngegg.png"
import { Link, NavLink } from 'react-router-dom';

const HomePage = (props) => {
  const [data,setdata]=useState([]);
  function getdata(){
    fetch(
      "https://api.nobelprize.org/v1/prize.json"
    )
      .then((res) => res.json())
      .then((data) => console.log(setdata(data.prizes)));

  }
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div className='home_container'>
         <div className='home_prizesection'>
            <div className='section1'>
              {
                props.data.map((element)=>(
                  element.laureates ? element.laureates.map((values)=>(

                  <div className='section1_content'> 
                    <div className='prize_content'>
                      <h3>Nobel Prize Winner</h3>
                      <h5>{element.year}</h5>
                    </div>
                    <h5>{element.category}</h5>
                    <h4>{values.firstname + " " +values.surname}</h4>
                    <h5>Motivation : {values.motivation}</h5>  
                  </div>
                  )):""
                )) 
              }
     

            </div>


            <div className='section2'>
              
                <img src={prize} alt='prize' className='prize_img'/>
                <div className='about'>The Nobel Prizes noh-BEL; Swedish: Nobelpriset ; Norwegian: Nobelprisen Norwegian: are five separate prizes that, according to Alfred Nobel's will of 1895, are awarded to "those who, during the preceding year, have conferred the greatest benefit to humankind."</div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default HomePage
