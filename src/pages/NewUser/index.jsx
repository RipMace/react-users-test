import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import TextInput from "components/TextInput";
import Friends from "components/Friends";
import {useUserContext} from "context/usersContext";
import Modal from "components/Modal";
import Alert from "components/Alert";
import {filterUser, disableAddUser, onSaveUser} from "utils";
import styles from "./styles.module.css";

const NewUser = ({ removeModal }) => {
  const [name, setName] = useState('')
  const [friends, setFriends] = useState([])
  const [retryModal, setRetryModal] = useState(false)
  const navigate = useNavigate();
  const { state, dispatch } = useUserContext()

  const onSave = () => {
    onSaveUser(() => {
        dispatch({type: 'ADD_USER', newUser: { id: slugify(name), name, friends }})
        removeModal ? removeModal() : navigate('/')
      },
      () => setRetryModal(true)
    )
  }

  const addFriend = newFriend => setFriends([...friends,newFriend ])

  const removeFriend = id => setFriends(friends.filter(filterUser(id)))

  return (
    <div className={styles.wrapper}>
      <h1>New User</h1>
      <div className={styles.insertName}>
        <TextInput id="new_name" label="Name" value={name} onChange={setName} />
        <button onClick={onSave} disabled={disableAddUser(name, state.users)}>Save</button>
      </div>
      <Friends friends={friends} addFriend={addFriend} removeFriend={removeFriend} />
      {retryModal &&
        <Modal>
          <Alert
            text=" Something went wrong during the user creation, do you want to retry?"
            onConfirm={onSave}
            onRefuse={() => setRetryModal(false)}
          />
        </Modal>
      }
    </div>
  )
}

export default NewUser;
