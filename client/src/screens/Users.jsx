import React from "react";
import BottomSlideNav from "../components/BottomSlideNav";
import "../assets/CSS/Users.css";
import LeftSideNav from "../components/LeftSideNav";

export default function Users({
  listOfUsers,
  currentUser,
  handleCreateRoom,
  setCurrentUser,
}) {
  return (
    <div className="users-parent">
      <div className="users-glass-card">
        <div className="user-glass-card-lft"></div>
        <div className="user-glass-card-rgt">
          <div className="users-contact-header-container">
            <h3>Contact Someone New:</h3>
          </div>
          <div className="users-list">
            {listOfUsers &&
              listOfUsers.map((user) => (
                <div
                  className="users-profile-card"
                  onClick={() => handleCreateRoom(user.id)}
                  key={user.id}
                >
                  <div className="users-profile-card-top">
                    <img
                      className="users-profile-img"
                      src={
                        user.profile_pic
                          ? user.profile_pic
                          : "https://i.imgur.com/rZOVQuh.jpg"
                      }
                      alt="Profle"
                    />

                    <p className="users-profile-name">{user.username}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="bsn-placholder"></div>
      <BottomSlideNav
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </div>
  );
}
