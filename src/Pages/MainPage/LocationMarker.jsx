import { Popup, Marker, useMapEvents } from "react-leaflet";
import { useCurrentCoordinates } from "../../Context/currentCoordinatesContext";
import { useCoordinatesContext } from "../../Context/coordinatesContext";
import { useEffect } from "react";

function LocationMarker() {
  const { currentCoordinates, setCurrentCoordinates } = useCurrentCoordinates();
  const { addCoordinates } = useCoordinatesContext();

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
