import { createContext, useContext } from "react";

export const currentCoordinatesContext = createContext();

function useCurrentCoordinates() {
  return useContext(currentCoordinatesContext);
}

export { useCurrentCoordinates };
