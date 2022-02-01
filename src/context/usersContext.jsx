import React, { useContext } from 'react';

const UserContext = React.createContext();

const UserContextProvider = ({ state, dispatch, children }) => (
  <UserContext.Provider value={{ state, dispatch }}>
      {children}
  </UserContext.Provider>
);

function useUserContext() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      'useUserContext must be used within a UserContextProvider',
    );
  }
  return context;
}

export { UserContextProvider, useUserContext };
