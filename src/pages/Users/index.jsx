import React from 'react'
import { useNavigate } from "react-router-dom";
import {useUserContext} from "../context/usersContext";

const Users = () => {
  const navigate = useNavigate();
  const { state } = useUserContext()
  return (
    <>
      <h1>Users</h1>
      <button onClick={() => navigate('/new-user')}>New</button>
      <ul>
        {state.users.map(user => <li onClick={() => navigate(`${user.id}`)}>{user.name}</li> )}
      </ul>
    </>
  )
}

export default Users;
