import React from "react";
import { useMemo } from "react";

import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useSelector, useDispatch } from "react-redux";

import Modal from "./Modal";
import { hideEventMapModal } from "../features/events/eventMapSlice";
import { useGetEventQuery } from "../services/events";

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
console.log(GOOGLE_API_KEY);
const containerStyle = {
  width: "400px",
  height: "400px",
};

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

function EventMap({ center }) {
  const dispatch = useDispatch();

  const { eventMapModal } = useSelector((state) => state.eventMap);
  //   console.log("CENTER", center)
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyACbmfzsE_62WbilmejtzcDzcWq8R5gchk",
  });
  const markerLocation = useMemo(() => ({
    lat: center?.lat,
    lng: center?.lng,
  }));

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  //   // Query /api/event/{event_id} for the event with the id from the payload
  //   const { data, isLoading } = useGetEventQuery(eventId.payload);
  //   if (isLoading) return <div>Loading...</div>;

  return isLoaded ? (
    <Modal
      visible={eventMapModal}
      onClose={() => dispatch(hideEventMapModal())}
    >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <MarkerF position={center} />
        </GoogleMap>
    </Modal>
  ) : (
    <></>
  );
}

export default React.memo(EventMap);
