import React, { useReducer } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Users from './pages/Users';
import NewUser from './pages/NewUser';
import UserDetail from './pages/UserDetail';
import UserReducer from "./reducers/user";

const App = () => {
  const [state, dispatch] = useReducer(UserReducer, {users: [{ id: 'a', name: 'a'}, { id: 'b', name: 'b'}]});
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users state={state} dispatch={dispatch}/>} />
          <Route path="new-user" element={<NewUser state={state} dispatch={dispatch} />} />
          <Route path=":id" element={<UserDetail state={state} dispatch={dispatch} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
