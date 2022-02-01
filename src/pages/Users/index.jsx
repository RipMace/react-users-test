import React from 'react'
import { useNavigate } from "react-router-dom";
import {useUserContext} from "context/usersContext";
import styles from './styles.module.css'

const Users = () => {
  const navigate = useNavigate();
  const { state } = useUserContext()
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>Users</h1>
        <button onClick={() => navigate('/new-user')}>New</button>
      </div>
      <ul>
        {state.users.map(user => <li className="pointer" onClick={() => navigate(`${user.id}`)}>{user.name}</li> )}
      </ul>
    </div>
  )
}

export default Users;
