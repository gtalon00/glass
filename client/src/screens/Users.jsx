import React from "react";
import '../assets/CSS/Users.css'


// import { Link } from "react-router-dom";

export default function Flavors(props) {
  const { listOfUsers } = props;


  return (
    <div className='users-parent'>
      <div className='users-glass-card'>
        <div className='users-contact-header-container'>
        <h3>Contact Someone New:</h3>
        </div>
        <div className='users-list'>
      {listOfUsers &&
        listOfUsers.map((user) => (
          <div className='users-profile-card' key={user.id}>
              <img className='users-profile-img' src={user.profile_pic} alt='Profle Picture'/>
            <p>{user.username}</p>
          </div>
        ))}
        </div>
        </div>
    </div>
  );
}