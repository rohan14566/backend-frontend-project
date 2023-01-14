import React from 'react'

import Moviecard from '../Components/moviecard'
import Palace from '../Components/Palace'
import Palace1 from '../Components/Palace1'
import Stories from '../Components/Stories'
import { Link } from 'react-router-dom'
// import { homeMovie } from '../Backend/Home1'
// import { homePalace } from '../Backend/Home1'
import CollapsibleExample from '../Components/Appbar'; 
import { useState,useEffect } from 'react'

export default function Home() {
  const [homeMovie,setHomeMovie]=useState()
  const [homePalace,setHomePalace]=useState()
  useEffect(()=>{
    fetch('https://back-end-project-theta.vercel.app/home/dataHomeController')
    .then(response=>response.json())
    .then(json=>setHomeMovie(json))
    .catch(err=>console.log("error"))
},[]);
useEffect(()=>{
  fetch('https://back-end-project-theta.vercel.app/home/data1HomeController')
  .then(response=>response.json())
  .then(json=>setHomePalace(json))
  .catch(err=>console.log("error"))
},[]);
  return (
    <>
    <CollapsibleExample/>
    <Link to="/Newpage" className='link'>
    <div className='grid'>
      <div className="grid1">
      <img width="600px" height="410px" src='https://images.pexels.com/photos/338936/pexels-photo-338936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=""/>
      <h3> Title of vertical gallary</h3>
      <p>travel/Augest 27 2017</p>
      </div>
      <div className="grid2">
        <img width="330px" height="200px" src='https://img.freepik.com/free-vector/forest-scene-with-various-forest-trees_1308-57640.jpg?w=2000' alt=""/>
      <h4> The Sound cloud</h4>
      <p>travel/Augest 27 2017</p>
      </div>
      <div className="grid2">
        <img width="330px" height="200px" src='https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
      <h3> </h3>
      <h4> The Sound cloud</h4>
      <p>travel/Augest 27 2017</p>
      </div>
    </div><br/>
    <h2 id='latest'>The Latest</h2>
    <div id='check'></div>
       <div className="building">
       {
        homeMovie && homeMovie.map((item)=>{
          return(
            <>
            <Moviecard imgsrc={item.imgsrc} heading={item.heading} para={item.para}/>
              </>
          )
        })
       }
    </div><br/> 
    <h2 id='latest1'>Latest Articles</h2>
       <div className="build">
       {
 homePalace && homePalace.map((item)=>{
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
   
   <h3 id='stories'>Lastest Stories</h3>
   <Stories/>
   <p id="last">View More 
   <img src='https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=4ad4f6fa-3989-4487-80f0-62a91b9ae5a6&api_key=CometServer1&access_token=1667843362_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_236c751ba447a8e9e7309af0ba45ae0da3051a2f' alt=''/>
   </p>
</Link>   
    </>
  )
}
