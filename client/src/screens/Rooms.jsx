import { useEffect, useState } from "react"

export default function Rooms({ listOfRooms, currentUser }) {
  const [chatList, setChatList] = useState();

  useEffect(() => {
    // const extractUsers = () => {
      const users = listOfRooms.map((room) => {
        return room.users.filter(user => user.id !== currentUser.id)
        // console.log(room.users)
      })
      console.log(users)
    // }
    // extractUsers()
  }, [])

  return (
    <div>
        <h3>Rooms</h3>
      {/* {chatList &&
          chatList.map((chat) => (
        <p>{chat[0].username}</p>
        ))}
          <div key={chat.id}>
            
          </div> */}
    </div> 
  )
}
