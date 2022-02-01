import React from 'react';
import SelectFriends from "components/SelectFriends";
import {useUserContext} from "context/usersContext";
import styles from './styles.module.css'

const Friends = ({ friends = [], users, addFriend, removeFriend }) => {
  const { state, dispatch } = useUserContext()

  const onAddNewUser = () => {
    dispatch({type: 'ADD_NEW_FRIEND_MODAL' })
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <div className="flex-between">
          <h3>Friends</h3>
          <button onClick={onAddNewUser}>New Friend</button>
        </div>
        <SelectFriends friends={friends} users={users || state.users} addFriend={addFriend}/>
        <ul>
          {friends.map((friend) => <li>
            <div className={styles.friend}>
              <p>{friend.name}</p>
              <button onClick={() => removeFriend(friend.id)}>remove</button>
            </div>
          </li>)}
        </ul>
      </div>
    </div>
    )

}

export default Friends;
