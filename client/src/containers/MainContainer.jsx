import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { getAllRooms } from "../services/rooms"
import { getAllUsers } from "../services/users";
// import { deleteUser, getAllUsers, putUsers } from "../services/users";
import { deleteMessage, getAllMessages, putMessage } from "../services/messages";
import Landing from '../screens/Landing'
import Users from '../screens/Users'
import Rooms from '../screens/Rooms'
import Messages from "../screens/Messages";

export default function MainContainer({currentUser}) {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [listOfRooms, setListOfRooms] = useState([]);
  const [listOfMessages, setListOfMessages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getAllUsers();
      setListOfUsers(userData);
    };

    const fetchRooms = async () => {
      const roomData = await getAllRooms();
      setListOfRooms(roomData);
    };

    
    if (currentUser) {
      fetchRooms()
      fetchUsers();
    }
  }, [currentUser]);
  
  const fetchMessages = async (id) => {
    const messageData = await getAllMessages(id);
    setListOfMessages(messageData);
  };
  

  const handleUpdate = async (id, formData) => {
    const messageData = await putMessage(id, formData);
    setListOfMessages((prevState) =>
      prevState.map((food) => {
        return food.id === parseInt(id) ? messageData : food;
      })
    );
    // history.push("/");
  };

  const handleDelete = async (id) => {
    await deleteMessage(id);
    setListOfMessages((prevState) => prevState.filter((message) => message.id !== id));
  };

  return (
    <Switch>

    <Route path='/users'>
        <Users listOfUsers={listOfUsers} currentUser={currentUser}/>
    </Route>

    <Route path="/rooms/:id/messages">
        <Messages
          listOfMessages={listOfMessages}
          currentUser={currentUser}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          fetchMessages={fetchMessages}
        />
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
