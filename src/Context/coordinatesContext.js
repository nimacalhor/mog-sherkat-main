import { createContext, useContext } from "react";

export const coordinatesContext = createContext();

function useCoordinatesContext() {
  return useContext(coordinatesContext);
}

export { useCoordinatesContext };
