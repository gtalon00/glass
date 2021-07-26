import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Rooms({ listOfRooms, currentUser }) {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    const extractUsers = () => {
      const users = listOfRooms.map((room) => {
        return {id: room.id, user: room.users.find(user => user.id !== currentUser.id)}
      })
      setChatList(users)
    }
    if (listOfRooms.length && currentUser) {
      extractUsers()
    }
  }, [listOfRooms, currentUser])

  return (
    <div>
        <h3>Rooms</h3>
      {chatList.map((chat) => (
        <Link to={`/rooms/${chat.id}/messages`}>
        <div key={chat.id}>
        <img src={chat.user.profile_pic} />
        <p>{chat.user.username}</p>
        </div>
        </Link>
        ))}
    </div> 
  )
}
