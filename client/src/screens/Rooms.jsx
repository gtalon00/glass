import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BottomSlideNav from "../components/BottomSlideNav";
import LeftSideNav from "../components/LeftSideNav";
import "../assets/CSS/Rooms.css";

export default function Rooms({ listOfRooms, currentUser, setCurrentUser }) {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    const extractUsers = () => {
      const users = listOfRooms.map((room) => {
        return {
          id: room.id,
          user: room.users.find((user) => user.id !== currentUser.id),
        };
      });
      setChatList(users);
    };

    if (listOfRooms.length && currentUser) {
      extractUsers();
    }
  }, [listOfRooms, currentUser]);

  return (
    <div className="rooms-parent">
      <div className="rooms-glass-card">
        <div className="rooms-glass-card-lft">
          <LeftSideNav
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </div>
        <div className="rooms-glass-card-rgt">
          <div className="rooms-contact-header-container">
            <h3>Messages</h3>
          </div>
          <div className="rooms-list">
            {chatList.map((chat) => (
              <div className="rooms-instance" key={chat.id}>
                <Link className="" to={`/rooms/${chat.id}/messages`}>
                  <div className="rooms-instance-img">
                    <img
                      className="rooms-profile-img"
                      src={
                        chat?.user?.profile_pic
                          ? chat?.user?.profile_pic
                          : "https://i.imgur.com/rZOVQuh.jpg"
                      }
                      alt={chat?.user?.username}
                    />
                  </div>
                  <div className="rooms-instance-chat-detail">
                    <div className="rooms-instance-username">
                      <p className="rooms-username">{chat?.user?.username}</p>
                    </div>
                    <div className="rooms-instance-time">
                      {/* <p className="rooms-timestamp">Last messaged: Am</p> */}{" "}
                      {/*feature to add */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bsn-placholder">
        <BottomSlideNav
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </div>
    </div>
  );
}
