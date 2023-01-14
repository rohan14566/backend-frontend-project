import React from 'react'

export default function Moviecard(props) {
  return (
    <>
   <div className='card'>
      <img width="300px" height="200px" src={props.imgsrc} alt=""/>
        <h4>{props.heading}</h4>
        <p>{props.para}</p>
        <p>Traval/<span>August 27 2018</span></p>
    </div>
    </>
  
  )
}


