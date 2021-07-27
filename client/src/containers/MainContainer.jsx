import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { getAllRooms, postRoom } from "../services/rooms";
import { getAllUsers } from "../services/users";
import {
  deleteMessage,
  getAllMessages,
  putMessage,
  postMessage,
} from "../services/messages";
import Landing from "../screens/Landing";
import Users from "../screens/Users";
import Rooms from "../screens/Rooms";
import Messages from "../screens/Messages";

export default function MainContainer({ currentUser, setCurrentUser }) {
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
      fetchRooms();
      fetchUsers();
    }
  }, [currentUser]);

  const fetchMessages = async (id) => {
    const messageData = await getAllMessages(id);
    setListOfMessages(messageData);
  };

  const handleCreate = async (id, formData) => {
    console.log(id);
    console.log(formData);
    const messageData = await postMessage(id, formData);
    const user = currentUser;
    setListOfMessages((prevState) => [...prevState, { ...messageData, user }]);
  };

  const handleCreateRoom = async (userId) => {
    const roomData = await postRoom(userId);
    setListOfRooms((prevState) => [...prevState, roomData]);
    history.push(`/rooms/${roomData.id}/messages`);
  };

  const handleUpdate = async (id, formData) => {
    const messageData = await putMessage(id, formData);
    setListOfMessages((prevState) =>
      prevState.map((message) => {
        return message.id === parseInt(id) ? messageData : message;
      })
    );
  };

  const handleDelete = async (id) => {
    await deleteMessage(id);
    setListOfMessages((prevState) =>
      prevState.filter((message) => message.id !== id)
    );
  };

  return (
    <Switch>
      <Route path="/users">
        <Users
          listOfUsers={listOfUsers}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          handleCreateRoom={handleCreateRoom}
        />
      </Route>

      <Route path="/rooms/:id/messages">
        <Messages
          listOfMessages={listOfMessages}
          fetchMessages={fetchMessages}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          handleDelete={handleDelete}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
        />
      </Route>

      <Route path="/rooms">
        <Rooms
          listOfRooms={listOfRooms}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </Route>

      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  );
}
