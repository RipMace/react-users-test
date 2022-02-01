import produce from 'immer';

const UserReducer = produce((state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            state.users.push(action.newUser);
            return state
        case 'EDIT_USER':
            const currentIdex = state.users.findIndex(user => user.id === action.currentId)
            return {count: state.count - 1};
        default:
            throw new Error();
    }
})


export default UserReducer;
