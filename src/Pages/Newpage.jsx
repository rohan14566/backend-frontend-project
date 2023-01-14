import React from 'react'
import Navbartitle from '../Components/Appbar1'
import { Link } from 'react-router-dom'
export default function Newpage() {
  return (
    <>
    <Navbartitle/>
    <Link to="/" className='link1'>
     <div className='newpage'>
    <h2 className='head'>Ways to animate a react app</h2>
    <img className='image' width="400px" height="240px" src="https://miro.medium.com/max/1400/1*47fUazhRoJgChsgy6YxnzQ.png" alt=""/>
    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, laborum. Aliquid modi, earum dolorum adipisci at iste. Asperiores necessitatibus, est, temporibus dolore eos culpa quisquam accusantium corporis suscipit reprehenderit quae.20 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quibusdam inventore quia! Quae, consectetur quam possimus et alias iure sint nesciunt in perspiciatis atque eius excepturi debitis. Iure, quas.</p>
    <img className='image' width="400px" height="240px" src="https://blog.logrocket.com/wp-content/uploads/2019/04/react-hooks-cheat-sheet-best-practices.png"alt=""/>
    </div>
    </Link>
    </>
  )
}


