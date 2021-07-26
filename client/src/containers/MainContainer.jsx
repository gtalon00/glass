import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { getAllRooms } from "../services/rooms"
import { deleteUser, getAllUsers, putUsers } from "../services/users";
import { deleteMessage, getAllMessages, putMessages } from "../services/messages";
import Landing from '../screens/Landing'
import Users from '../screens/Users'
import Rooms from '../screens/Rooms'
import Messages from "../screens/Messages";


export default function MainContainer({currentUser}) {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [listOfRooms, setListOfRooms] = useState([]);
  const [listOfMessages, setListOfMessages] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getAllUsers();
      setListOfUsers(userData);
    };
    // const fetchRooms = async () => {
    //   const roomData = await getAllRooms();
    //   setListOfRooms(roomData);
    // };
    // const fetchMessages = async () => {
    //   const messageData = await getAllMessages();
    //   setListOfMessages(messageData);
    // };
    // fetchRooms()
    fetchUsers();
    // fetchMessages();
  }, []);

  return (
    <Switch>
    <Route path='/users'>
        <Users listOfUsers={listOfUsers} />
    </Route>
      
    <Route path="/rooms/:id/messages">
      <Messages />
    </Route>

    <Route path="/rooms">
        <Rooms listOfRooms={listOfRooms} currentUser={currentUser}/>
    </Route>
      
    <Route path='/'>
        <Landing />
    </Route>
    {/* <Route path="/foods/new">
      <FoodCreate handleCreate={handleCreate} />
    </Route> */}
    {/* <Route path="/foods">
      <Foods foodList={foodList} handleDelete={handleDelete} />
    </Route> */}
  </Switch>
  )
}
