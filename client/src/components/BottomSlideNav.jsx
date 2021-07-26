import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/CSS/BottomSlideNav.css'

export default function BottomSlideNav({currentUser}) {

  return (
    <div className='bsn-parent'>
      <div className='bsn-top'>
        <div className='bsn-top-img-container'>
        <img className='bsn-top-img' src={currentUser.profile_pic} />
        </div>
      </div>
      <div className='bsn-bottom'>
        <Link to=''></Link>
      </div>
    </div>
  )
}
