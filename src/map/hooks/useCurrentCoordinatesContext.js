import { useContext } from "react";
import currentCoordinateContext from "../contexts/currentCoordinateContext";

function useCurrentCoordinatesContext() {
  return useContext(currentCoordinateContext);
}

export default useCurrentCoordinatesContext
