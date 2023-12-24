import React, { useState } from "react";
import sessionContext from "../contexts/session.context";

function SessionContextProvider({ children }) {
  const [sessionId, setSessionId] = useState(null);

  return (
    <sessionContext.Provider
      value={{ sessionId, setSessionData: setSessionId }}
    >
      {children}
    </sessionContext.Provider>
  );
}

export default SessionContextProvider;
