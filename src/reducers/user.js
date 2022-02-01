import produce from 'immer';
import { findUser } from 'utils';

const initialState = {
    // users: [{ id: 'a', name: 'a', friends: []}, { id: 'b', name: 'b', friends: []}],
    users: [],
    modals: []
}

const UserReducer = produce((state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            state.users.push(action.newUser);
            return state
        case 'EDIT_USER':
            const userIndex = state.users.findIndex(findUser(action.user.id))
            state.users[userIndex] = action.user
            return state
        case 'ADD_NEW_FRIEND_MODAL':
            state.modals.push(state.modals.length + 1);
            return state
        case 'REMOVE_NEW_FRIEND_MODAL':
            state.modals.pop();
            return state
        default:
            throw new Error();
    }
})


export {
    UserReducer,
    initialState
};
