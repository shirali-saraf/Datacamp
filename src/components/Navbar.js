import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = (props) => {
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
  }, [] ,props.year);
  const cate = [...new Set(data.map((val) => val.category))];
  const years=[...new Set(data.map((val)=>val.year))];

  function filtervalue(event){
    // data.filtervalueselected(event.target.value)
      props.setcategory(event.target.value)
    }
   function filtervalueDate(event){
    // data.filtervalueselectedDate(event.target.value);
    props.setyear(event.target.value)
   }

  return (
    <div className="container">
      <div className="home_heading">
        <h1>THE NOBEL PRIZE</h1>
      </div>
      <div className="home_nav">
        <ul>
          {/* <NavLink to='/TopWinners'><li>Winners more than 1 time</li></NavLink> */}
          <li>
          <label htmlFor="category">Select Category : </label>
          <select name="category" id="category" placeholder='Select Category' onChange={filtervalue}>
                        <option value="null">None</option>
                        {
                            cate.map((v, index) => (
                                <option key={index} className='category-option'>{v}</option>
                            ))
                        }
                    </select>
          </li>

          <li><label htmlFor="Years">Select Year : </label>
                    <select name="Year" id="Year" onChange={filtervalueDate}>
                        <option value="null">None</option>
                        {
                            years.map((v, index) => (
                                <option key={index} className='category-option'>{v}</option>
                            ))
                        }
                    </select></li>


        
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
