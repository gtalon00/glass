import React from 'react'
import '../assets/CSS/BottomSlideNav.css'

export default function BottomSlideNav({currentUser}) {

  return (
    <div className='bsn-parent'>
      <div className='bsn-top'>
        <div>
        <img src={currentUser.profile_pic} />
        </div>
      </div>
      <div className='bsn-bottom'></div>
    </div>
  )
}
