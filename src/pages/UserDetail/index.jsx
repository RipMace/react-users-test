import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import TextInput from "../components/TextInput";
import {useUserContext} from "../context/usersContext";
import Friends from "../components/Friends";

const UserDetail = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ id: '', name: '', friends: []})
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

  const canAddUser = (name = '', users) => !name.length || users.filter(u => u.id !== id).some(u => u.name === name)

  return (
    <>
      <h1>User: {user.name}</h1>
      <TextInput id="name" label="Name" value={user.name} onChange={(name) => setUser({ ...user, name})} />
      <button onClick={onEdit} disabled={canAddUser(user.name, state.users)}>Modifica</button>
      <Friends
        users={state.users?.filter(user => user.id !== id)}
        friends={user.friends}
        addFriend={newFriend => setUser({ ...user, friends: [...user.friends, newFriend ]})}
        removeFriend={id => setUser({ ...user, friends: user.friends.filter(f => f.id !== id)})}
      />
    </>
  )
}

export default UserDetail;
