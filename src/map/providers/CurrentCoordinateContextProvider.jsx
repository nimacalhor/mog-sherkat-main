import React, { useState } from "react";
import currentCoordinateContext from "../contexts/currentCoordinateContext";
import { D_LAT_LON } from "../constants";

function currentCoordinateContextProvider({ children }) {
  const [currentCoordinates, setCurrentCoordinates] = useState(D_LAT_LON);

  return (
    <currentCoordinateContext.Provider
      value={{ currentCoordinates, setCurrentCoordinates }}
    >
      {children}
    </currentCoordinateContext.Provider>
  );
}

export default currentCoordinateContextProvider;
