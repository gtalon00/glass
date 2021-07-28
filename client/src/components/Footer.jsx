import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ currentUser }) {
  return (
    <div>
      <Link to="/users">List of Users</Link>
      <> </>
      <Link to="/rooms">Rooms</Link>
      <> </>
      <Link to={`/rooms/:id/messages`}>Messages</Link>
      <> </>
      <Link to="/">Landing</Link>
    </div>
  );
}
