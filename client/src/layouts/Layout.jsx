import React from 'react'
import '../assets/CSS/Layout.css'


export default function Layout(props) {


  return (
    <div className='parent-of-props'> 
  <h3>This will be Header</h3>    
      <div className='children-of-props'>{props.children}</div>
  <h3>This will be Footer</h3>    
    </div>
  )
}
