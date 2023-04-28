import React from "react";

import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useSelector, useDispatch } from "react-redux";

import Modal from "./Modal";
import { hideEventMapModal } from "../features/events/eventMapSlice";

//Still need help with hiding the API key
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const containerStyle = {
  width: "400px",
  height: "400px",
};

// This variable from react google maps is now in the eventMapSlice
// as the initialState. We pass it as a prop to the EventMap component
// in the component where the EventMap Modal is rendered


function EventMap({ center }) {
  const dispatch = useDispatch();
  // Get the eventMapModal for the Modal Component
  const { eventMapModal } = useSelector((state) => state.eventMap);

  // Logic taken from react-google-maps: https://www.npmjs.com/package/@react-google-maps/api
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  // lines 40-54 are taken from react-google-maps
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(eventMap) {
    setMap(eventMap);
  }, []);

  const onUnmount = React.useCallback(function callback(eventMap) {
    setMap(null);
  }, []);

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
        <MarkerF position={center} />
      </GoogleMap>
    </Modal>
  ) : (
    <></>
  );
}

export default React.memo(EventMap);
