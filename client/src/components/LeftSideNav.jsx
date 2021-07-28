import React from "react";
import "../assets/CSS/LeftSideNav.css";
import { RiUserSearchLine } from "react-icons/ri";
import { IoIosChatbubbles } from "react-icons/all";
import { Link, useHistory } from "react-router-dom";
import { removeToken } from "../services/auth";

export default function LeftSideNav({ currentUser, setCurrentUser }) {
  const history = useHistory();

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  return (
    <div className="lsn-parent">
      <div className="lsn-top">
        <img
          className="lsn-profile-pic"
          src={currentUser?.profile_pic}
          alt={`${currentUser?.username}'s profile`}
        />
        <hr className="lsn-hr-top" />
        <h3 className="lsn-username">{currentUser?.username}</h3>
        <h3 className="lsn-email">{currentUser?.email}</h3>
      </div>
      <hr className="lsn-hr-btm" />
      <div className="lsn-mid">
        <Link className="lsn-links" to="/users">
          <RiUserSearchLine className="bsn-icons" />
        </Link>
        <Link className="lsn-links" to="/rooms">
          <IoIosChatbubbles className="bsn-icons" />
        </Link>
      </div>
      <hr className="lsn-hr-btm" />
      <div className="lsn-btm">
        <button className="log-out-btn" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}
