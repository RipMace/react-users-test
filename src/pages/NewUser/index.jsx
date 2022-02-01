import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/TextInput";
import Friends from "../../components/Friends";
import slugify from "slugify";
import {useUserContext} from "../../context/usersContext";
import Modal from "../../components/Modal";

const NewUser = ({ removeModal }) => {
  const [name, setName] = useState('')
  const [friends, setFriends] = useState([])
  const [retryModal, setRetryModal] = useState(false)
  const navigate = useNavigate();
  const { state, dispatch } = useUserContext()

  const checkSaveNewUser = () => Math.random() < 0.5

  const onSave = () => {
    let success = false;
    let retryNum = 0;
    while (!success && retryNum < 2) {
      success = checkSaveNewUser()
      if (success) {
        dispatch({type: 'ADD_USER', newUser: { id: slugify(name), name, friends }})
        removeModal ? removeModal() : navigate('/')
      }
      retryNum++
    }
    if (!success){
      setRetryModal(true)
    }
  }

  const addFriend = newFriend => setFriends([...friends,newFriend ])

  const removeFriend = id => setFriends(friends.filter(f => f.id !== id))

  const canAddUser = (name = '', users) => !name.length || users.some(u => u.name === name)

  return (
    <>
      <h1>NewUser</h1>
      <TextInput id="new_name" label="Name" value={name} onChange={setName} />
      <button onClick={onSave} disabled={canAddUser(name, state.users)}>Save</button>
      <Friends friends={friends} addFriend={addFriend} removeFriend={removeFriend} />
      {retryModal &&
        <Modal>
          <div>
            Something went wrong during the user creation, do you want to retry?
            <button onClick={onSave}>Yes</button>
            <button onClick={() => setRetryModal(false)}>No</button>
          </div>
        </Modal>
      }
    </>
  )
}

export default NewUser;
