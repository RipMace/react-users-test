import React from 'react'

// @ts-ignore
const Users = ({ state, dispatch }) => {

    // @ts-ignore
    return (
        <>
            <h1>Users</h1>
            <button>New</button>
            <ul>
                {state.user.map(({ name }) => <li>{name}</li> )}
            </ul>

        </>
    )

}

export default Users;
