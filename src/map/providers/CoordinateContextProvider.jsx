import React from "react";
import coordinateContext from "../contexts/coordinateContext";
import useCoordinateContext from "../hooks/useCoordinateContext";

function coordinateContextProvider({ children }) {
  const [coordinates, setCoordinates] = useState([]);
  const { setCurrentCoordinates } = useCoordinateContext();

  const addHandler = (lat, lon) => {
    setCoordinates((prevCoordinates) => [...prevCoordinates, [lat, lon]]);
    setCurrentCoordinates([lat, lon]);
  };
  
  return (
    <coordinateContext.Provider
      value={{ coordinates, addCoordinates: addHandler }}
    >
      {children}
    </coordinateContext.Provider>
  );
}

export default coordinateContextProvider;
