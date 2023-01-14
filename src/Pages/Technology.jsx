import React from 'react'
import Palace from '../Components/Palace'
// import { techPalace } from '../Backend/Technology';
import CollapsibleExample from '../Components/Appbar'; 
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
export default function Fitness() {
  const[techPalace,setTechPalace]=useState()
  useEffect(()=>{
    fetch('https://back-end-project-theta.vercel.app/technology')
    .then(res=>res.json())
    .then(json=>setTechPalace(json))
    .catch((error)=>console.log("error"))
  },[])
  return (
   
    <>
    <CollapsibleExample/>
 <h2 id='late'>Technology</h2>
 <Link to="/Newpage" className='link'>
    <div className="build1">
     {
      techPalace && techPalace.map((item)=>{
        return(
          <Palace imgsrc={item.imgsrc} title={item.title} paragraph={item.paragraph}/>
        )
      })
     }
    <div className="separate"> <span>Advertisment</span></div>
    </div>
    </Link>
    </>

  )
}
