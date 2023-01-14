import React from 'react'
import Moviecard from '../Components/moviecard'
// import { bollyMoviecard } from '../Backend/Bollywood'
// import { bollyPalace } from '../Backend/Bollywood'
import Palace from '../Components/Palace'
import Palace1 from '../Components/Palace1'
import { Link } from 'react-router-dom'
import CollapsibleExample from '../Components/Appbar'; 
import { useState,useEffect } from 'react'

export default function Bollywood() {
const [bollyMoviecard,setBollyMovie]=useState()
const [bollyPalace,setBollyPalace]=useState()
 useEffect(()=>{
 fetch('https://back-end-project-theta.vercel.app/bollywood/dataBollywoodController')
 .then(res=>res.json())
 .then(json=>setBollyMovie(json))
 .catch((error)=>console.log("error"))
},[])

useEffect(()=>{
  fetch('https://back-end-project-theta.vercel.app/bollywood/data1BollywoodController')
  .then(res=>res.json())
  .then(json=>setBollyPalace(json))
  .catch((error)=>console.log("error"))
},[])
  return (
    <>
    <CollapsibleExample/>
     <h2 id='latest'>Bollywood</h2>
    <div id='check'></div>
    <Link to="/Newpage" className='link'>
    <div className="building">
     {
      bollyMoviecard && bollyMoviecard.map((item)=>{
        return(
          <Moviecard imgsrc={item.imgsrc} heading={item.heading} para={item.para}/>
        )
      })
      
     }
      
    </div><br/>
    <h2 id='latest1'>Latest Articles</h2>
    <div className="build">
      {
     bollyPalace && bollyPalace.map((item)=>{
      return(
        <Palace imgsrc={item.imgsrc} title={item.title} paragraph={item.paragraph}/>
      )
     })
      }
    <div className="separate"> <span>Advertisment</span></div>
    </div>
    <p id='load'>
    <img height="16px"src='https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=dc40978a-69b4-47c1-8183-8c25163ad05c&api_key=CometServer1&access_token=1667843362_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_236c751ba447a8e9e7309af0ba45ae0da3051a2f' alt=''/>
      Load More
    </p>
    <div id='div'>
      <h4> Title of vertical gallery</h4>
      <p>travel/<span>Augest 27 2017</span></p>
    </div>
   <Palace1/>
   </Link>
    </>
  )
}
