import React from "react";
import BottomSlideNav from "../components/BottomSlideNav";
import '../assets/CSS/Users.css'


// import { Link } from "react-router-dom";

export default function Flavors(props) {
  const { listOfUsers, currentUser } = props;


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
            <div className='users-profile-card-top'>
              <img className='users-profile-img' src={user.profile_pic} alt='Profle Picture'/>
            </div>
            <div className='users-profile-card-bottom'>
              <p>{user.username}</p>
            </div>
            </div>
        ))}
        </div>
      </div>
      <div className='users-bsn-placholder'></div>
      <BottomSlideNav currentUser={currentUser} />
    </div>
  );
}