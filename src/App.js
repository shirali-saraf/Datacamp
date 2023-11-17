import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopWinners from './components/TopWinners';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';


function App() {
  const [year,setyear]=useState("null");
  const [category,setcategory]=useState("null");
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

  let newvalue = data.filter((categ) => {

    if (category === "chemistry") {
      return categ.category === category;
    }
    else if (category === "peace") {
      return categ.category === category;
    }
    else if (category === "literature") {
      return categ.category === category;
    }
    else if (category === "economics") {
      return categ.category === category;
    }
    else if (category === "physics") {
      return categ.category === category;
    }
    else if (category === "medicine") {
      return categ.category === category;
    }
    else {
      return categ.category;
    }

  })

  if(year !== 'null'){
      newvalue=newvalue.filter((from)=>{
        return from.year===year;
      })
  }


// function onfiltervalueSelected(filtervalue) {
//   setCategoryFilterValue(filtervalue);
// }
// function onDateChange(filterDate) {
//   setfilterDate(filterDate);
// }

  return (
    <BrowserRouter>
    <Navbar setyear={setyear} setcategory={setcategory} year={year}/>
    <Routes>
      <Route path='/' element={ <HomePage year={year} category={category} data={newvalue}/>}/>
      {/* <Route path='/TopWinners' element={<TopWinners/>}/> */}
    </Routes>
    </BrowserRouter> 
   
  );
}

export default App;
