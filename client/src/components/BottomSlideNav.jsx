import { Link } from "react-router-dom";
import "../assets/CSS/BottomSlideNav.css";
import { useState } from "react";
import { RiUserSearchLine, RiUserSettingsLine } from "react-icons/ri";
import { IoIosChatbubbles } from "react-icons/all";
import { GiMirrorMirror } from "react-icons/gi";

export default function BottomSlideNav({ currentUser }) {
  const [toggle, setToggle] = useState(false);

  const handleAppear = async () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <div className={toggle ? "bsn-parent bsn-revealed" : "bsn-parent"}>
      {/* <div className='bsn-bkgrnd'></div> */}
      <div className={toggle ? "bsn-top bsn-top-revealed" : "bsn-top"}>
        <div className="bsn-top-img-container">
          <img
            className={
              toggle ? "bsn-top-img bsn-top-img-revealed" : "bsn-top-img"
            }
            src={currentUser?.profile_pic}
            onClick={handleAppear}
          />
        </div>
      </div>
      <div className={toggle ? "bsn-middle bsn-middle-revealed" : "bsn-middle"}>
        <Link className="bsn-links" to="/users">
          <RiUserSearchLine className="bsn-icons" />
        </Link>
        <Link className="bsn-links" to="/rooms">
          <IoIosChatbubbles className="bsn-icons" />{" "}
        </Link>
        {/* <Link className='bsn-links' to='/'><RiUserSettingsLine className='bsn-icons'/> </Link> */}
      </div>
      <div className={toggle ? "bsn-bottom bsn-bottom-revealed" : "bsn-bottom"}>
        <div className="bsn-bottom-left-detail">
          <GiMirrorMirror className="mirror-icon" />
        </div>
        <div className="bsn-bottom-right-detail">
          <h3 className="bsn-bottom-right-username bottom-txt">
            {currentUser?.username}
          </h3>
          <h3 className="bsn-bottom-right-email bottom-txt">
            {currentUser?.email}
          </h3>
          <button className="bsn-bottom-btn">Log Out</button>
        </div>
      </div>
    </div>
  );
}
