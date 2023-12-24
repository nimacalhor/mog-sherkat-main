import { useContext } from "react";
import coordinateContext from "../contexts/coordinateContext";

function useCoordinateContext() {
  return useContext(coordinateContext);
}

export default useCoordinateContext;
