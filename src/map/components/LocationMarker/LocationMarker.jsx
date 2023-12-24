import { Popup, Marker, useMapEvents } from "react-leaflet";
import useCurrentCoordinatesContext from "../../hooks/useCurrentCoordinatesContext";
import useCoordinateContext from "../../hooks/useCoordinateContext";
import { useEffect } from "react";

function LocationMarker() {
  const { currentCoordinates, setCurrentCoordinates } = useCurrentCoordinatesContext();
  const { addCoordinates } = useCoordinateContext();

  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      map.flyTo(e.latlng);
      setCurrentCoordinates([lat, lng]);
      addCoordinates(lat, lng);
    },
  });

  useEffect(() => {
    if (currentCoordinates.length < 1) return;
    map.flyTo(currentCoordinates);
  }, [currentCoordinates, map]);

  return currentCoordinates.length < 1 ? null : (
    <Marker position={currentCoordinates}></Marker>
  );
}

export default LocationMarker;
