import React from "react";


// import { Link } from "react-router-dom";

export default function Flavors(props) {
  const { listOfUsers } = props;


  return (
    <div>
      <h3>Contact Someone New</h3>
      {listOfUsers &&
        listOfUsers.map((user) => (
          <div key={user.id}>
              {/* <img src={user.profile_pic} alt='Profle Picture'/> */}
            <p>{user.username}</p>
          </div>
        ))}
    </div>
  );
}