import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import TextInput from "components/TextInput";
import {useUserContext} from "context/usersContext";
import Friends from "components/Friends";
import { disableAddUser, findUser, filterUser } from "utils";
import styles from "./styles.module.css";

const UserDetail = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ id: '', name: '', friends: []})
  const { id } = useParams()
  const { state, dispatch } = useUserContext()

  useEffect(() => {
    const user = state.users.find(findUser(id))
    setUser(user);
  }, [id]);

  const onEdit = () => {
    dispatch({type: 'EDIT_USER', user })
    navigate('/')
  }

  const updateName = name => setUser({ ...user, name})
  const addFriend = newFriend => setUser({ ...user, friends: [...user.friends, newFriend ]})
  const removeFriend = id => setUser({ ...user, friends: user.friends.filter(filterUser(id))})

  return (
    <div className={styles.wrapper}>
      <h1>User: {user.name}</h1>
      <div className={styles.editName}>
        <TextInput id="name" label="Name" value={user.name} onChange={updateName} />
        <button onClick={onEdit} disabled={disableAddUser(user.name, state.users, id)}>Modifica</button>
      </div>
      <Friends
        users={state.users?.filter(filterUser(id))}
        friends={user.friends}
        addFriend={addFriend}
        removeFriend={removeFriend}
      />
    </div>
  )
}

export default UserDetail;
