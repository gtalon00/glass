import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { getAllRooms } from "../services/rooms"
import { deleteUser, getAllUsers, putUsers } from "../services/users";
import Landing from '../screens/Landing'
import Users from '../screens/Users'


export default function MainContainer() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [listOfRooms, setListOfRooms] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getAllUsers();
      setListOfUsers(userData);
    };
    const fetchRooms = async () => {
      const roomData = await getAllRooms();
      setListOfRooms(roomData);
    };
    
    fetchUsers();
    fetchRooms();
  }, []);

  return (
    <Switch>
    <Route path='/users'>
        <Users listOfUsers={listOfUsers} />
    </Route>
      
    <Route path='/'>
        <Landing />
    </Route>
    {/* <Route path="/foods/:id/edit">
      <FoodEdit foodList={foodList} handleUpdate={handleUpdate} />
    </Route> */}
    {/* <Route path="/foods/:id">
      <FoodDetail flavorList={flavorList} />
    </Route> */}
    {/* <Route path="/foods/new">
      <FoodCreate handleCreate={handleCreate} />
    </Route> */}
    {/* <Route path="/foods">
      <Foods foodList={foodList} handleDelete={handleDelete} />
    </Route> */}
  </Switch>
  )
}
