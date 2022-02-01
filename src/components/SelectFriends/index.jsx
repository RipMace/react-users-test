import React, {useState, useCallback } from 'react';
import { findUser } from "utils";

const SelectFriends = ({ friends, users, addFriend }) => {
  const [selectedFriend, setSelectedFriend] = useState('')

  const usersOptions = useCallback(
    () => users
      .filter(user => friends.findIndex(findUser(user.id)) === -1)
      .map(user => <option value={user.id}>{user.name}</option>),
    [users, friends],
  );

  return (
    <div className="flex-between">
      <select value={selectedFriend} onChange={(e) => setSelectedFriend(e.target.value)}>
        <option value="">select friend</option>
        {usersOptions()}
      </select>
        <button
          onClick={() => {
            addFriend(users.find(findUser(selectedFriend)))
            setSelectedFriend('')
          }}
          disabled={!selectedFriend}>Select Friend</button>
    </div>
  )
}

export default SelectFriends;
