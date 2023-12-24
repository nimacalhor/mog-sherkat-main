import { createContext, useContext, useState } from 'react';

const SessionDataContext = createContext();

export const SessionDataProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(null);

  return (
    <SessionDataContext.Provider value={{ sessionId, setSessionData: setSessionId}}>
      {children}
    </SessionDataContext.Provider>
  );
};

export const useSessionData = () => {
  return useContext(SessionDataContext)
}

