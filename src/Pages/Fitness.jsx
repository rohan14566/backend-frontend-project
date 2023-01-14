import React from 'react'
import Palace from '../Components/Palace'
// import { fitPalace } from '../Backend/Fitness';
import CollapsibleExample from '../Components/Appbar'; 
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
export default function Fitness() {
  const [fitPalace,setFitPalace]=useState()
 useEffect(()=>{
fetch('https://back-end-project-theta.vercel.app/fitness')
.then(res=>res.json())
.then(json=>setFitPalace(json))
.catch((error)=>console.log("error"))
},[])
  return (
    <>
    <CollapsibleExample/>
 <h2 id='lates'>Fitness</h2>
 <Link to="/Newpage" className='link'>
    <div className="build1">
      {
     fitPalace && fitPalace.map((item)=>{
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


