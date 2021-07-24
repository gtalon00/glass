import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/CSS/Landing.css'

export default function Landing() {
  return (
    <div className='landing-parent'>
      <div className='landing-glass-card'>
        <div className='landind-text'>
      <h1 className='lading-background-text'>Glass</h1>
      <h2 className='lading-intro landing-making'>Making</h2>
      <h2 className='lading-intro landing-clear'>Clear</h2>
      <h2 className='lading-intro landing-communication'>Communication</h2>
      <h2 className='lading-intro landing-clearer'>Clearer</h2>
      <Link to='/register'><button>Register</button></Link>
      <Link to='/login'><button>Log In</button></Link>
        </div>
      </div>
    </div>
  )
}
