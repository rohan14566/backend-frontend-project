import React from 'react'

export default function Palace(props) {
  return (
    <div  className='palace'>
    <img width="225px" height="180px" src={props.imgsrc}alt=""/>

        <div className="palace1">
            <h4>{props.title}</h4>
            <p>{props.paragraph}</p><br/>
            <p className='pr'>Traval/<span>August 27 2018</span></p>
        </div>
    </div>
  )
}
