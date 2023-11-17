// import React, { useEffect, useState } from 'react'
// import './TopWinners.css'
// import './HomePage.css'
// const TopWinners = () => {
//     const [data,setdata]=useState([]);
//     function getdata(){
//       fetch(
//         "https://api.nobelprize.org/v1/prize.json"
//       )
//         .then((res) => res.json())
//         .then((data) => console.log(setdata(data.prizes)));
  
//     }
//     useEffect(() => {
//       getdata();
//     }, []); 

//   const obj={};
// //   function countocc(dataobj){
// //      dataobj.map((value)=>(
// //         value.laureates ? value.laureates.map((element)=>(
// //             obj[element.firstname + element.surname]++
// //         )):""
// //      )) 
// //      return obj;
// //   }
// function countocc(dataobj){
//     // dataobj.forEach(element => {
//     //     if(element.laureates){
//     //         element.laureates.forEach((value)=>{
//     //             obj[element.firstname + element.surname]++
//     //         })
//     //     }    
//     // });
//     for(let element in dataobj){
//         if(element.laureates){
//             for(let x in element.laureates){
//                 obj[element.firstname + element.surname]++
//             }
        
//     }            
    
//     return obj;
// }
//   const occurences=countocc(data);
//   function checkname(name){
//     if(obj[name]>1){
//         return true;
//     }
//     else{
//         return false;
//     }
//   }
//   return (
//     <div className='winners_container'>
//       <div><h1>Top winners who have won more than 1 time</h1></div>
//       <div className='top_winners'>
        
//         <div>
//            <div className='winner_section'>
//            {
//             data.map((element)=>(
//                 element.laureates ? element.laureates.map((value)=>(
//                     checkname(value.firstname+value.surname)?
//                 //     <div className='section1_content'> 
//                 //     <div className='prize_content'>
//                 //       <h3>Nobel Prize Winner</h3>
//                 //       <h5>year</h5>
//                 //     </div>
//                 //     <h5>category</h5>
//                 //     <h4>name</h4>
//                 //     <h5>Motivation : </h5>  
//                 //   </div>:""
//                 // )): ""
//             )) 
//             }
//             </div>
           
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TopWinners
