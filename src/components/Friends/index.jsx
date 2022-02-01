import React, {useState} from 'react';

const SelectFriends = ({ users, addFriend}) => {
  const [selectedFriend, setSelectedFriend] = useState('')
  return (
    <select value={selectedFriend} onChange={(e) => setSelectedFriend(e.target.value)}>
      {
        users.map(user => <option value={user.id}>{user.name}</option>)
      }
    </select>
  )
}

export default SelectFriends;
