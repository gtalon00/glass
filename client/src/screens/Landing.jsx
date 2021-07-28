import React from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/Landing.css";

export default function Landing() {
  return (
    <div className="landing-parent">
      <div className="landing-glass-card">
        {/* <h1 className='landing-background-text'>Glass</h1> */}
        <div className="landing-text">
          {/* one double stack for text, the other as one line below it */}
          <h2 className="landing-intro landing-making">Making</h2>
          <h2 className="landing-intro landing-clear">Clear</h2>
          <h2 className="landing-intro landing-communication-clearer">
            Communication Clearer
          </h2>
        </div>
        <div className="landing-links">
          <Link to="/register">
            <button className="landing-register-btn">Register</button>
          </Link>
          <Link to="/login">
            <button className="landing-login-btn">Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
