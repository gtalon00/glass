import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/CSS/Landing.css'

export default function Landing() {
  return (
    <div class='landing-card'>
      <h1>Glass</h1>
      <h2>Making</h2>
      <h2>Clear</h2>
      <h2>Communication</h2>
      <h2>Clearer</h2>
      <Link to='/register'><button>Register</button></Link>
      <Link to='/login'><button>Log In</button></Link>
    </div>
  )
}
