import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import TextInput from "../components/TextInput";
import {useUserContext} from "../context/usersContext";

const UserDetail = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const { id } = useParams()
  const { state, dispatch } = useUserContext()

  useEffect(() => {
    const user = state.users.find((user) => user.id === id)
    setUser(user);
  }, [id]);

  const onEdit = () => {
    dispatch({type: 'EDIT_USER', user })
    navigate('/')
  }

  return (
    <>
      <h1>UserDetail</h1>
      <TextInput id="name" label="Name" value={user.name} onChange={(name) => setUser({ ...user, name})} />
      <button onClick={onEdit} disabled={!user?.name?.length}>Modifica</button>
    </>
  )
}

export default UserDetail;
