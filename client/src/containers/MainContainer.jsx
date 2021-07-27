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

export default function MainContainer({ currentUser }) {
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
    // history.push("/");
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
          handleCreateRoom={handleCreateRoom}
          // handleAppear={handleAppear}
          // toggle={toggle}
        />
      </Route>

      <Route path="/rooms/:id/messages">
        <Messages
          listOfMessages={listOfMessages}
          fetchMessages={fetchMessages}
          currentUser={currentUser}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
          // handleAppear={handleAppear}
          // toggle={toggle}
        />
      </Route>

      <Route path="/rooms">
        <Rooms
          listOfRooms={listOfRooms}
          currentUser={currentUser}
          // handleAppear={handleAppear}
          // toggle={toggle}
        />
      </Route>

      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  );
}
