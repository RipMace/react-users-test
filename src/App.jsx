import React, { useReducer } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Users from 'pages/Users';
import NewUser from 'pages/NewUser';
import UserDetail from 'pages/UserDetail';
import NewUsersModals from 'components/NewUsersModals';
import { UserReducer, initialState} from "reducers/user";
import { UserContextProvider } from "context/usersContext";
import './App.css'

const App = () => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <main className="App">
      <UserContextProvider state={state} dispatch={dispatch}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Users />} />
              <Route path="new-user" element={<NewUser />} />
              <Route path=":id" element={<UserDetail />} />
            </Routes>
            <NewUsersModals />
          </BrowserRouter>
      </UserContextProvider>
    </main>
  );
}

export default App;
