import { useContext } from "react";
import sessionContext from "../contexts/session.context";

function useSessionContext() {
  return useContext(sessionContext);
}

export default useSessionContext;
