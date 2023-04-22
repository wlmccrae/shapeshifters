import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showEventDetailModal, getEventId } from "../../features/events/eventDetailSlice";
import { useGetEventQuery } from "../../services/events";

import { showEventMapModal, setLat, setLng } from "../../features/events/eventMapSlice";



const EventCard = ({
    id,
    event_name,
    event_type,
    event_description,
    address_line1,
    address_line2,
    city,
    state,
    zip_code,
    start_datetime,
    end_datetime,
    image_url,
    host,
}) => {
  const dispatch = useDispatch();
  const { eventDetailModal } = useSelector((state) => state.eventDetail);
  // const { showMapModal } = useSelector(state => state.eventMap);

  // get the eventMap slice center
  const { center } = useSelector(state => state.eventMap)
  //Query for the event with the eventId from the payload
  const { data, isLoading } = useGetEventQuery(id);
  if (isLoading) return <div>Loading...</div>;

  const handleClick = (e) => {
    dispatch(getEventId(id));
    dispatch(showEventDetailModal());
  };

  const handleShowMap = (e) => {
    dispatch(getEventId(id));
    console.log("DATA", data)
    console.log("LONG", data.lon)
    console.log("LAT", data.lat)
    const lat = Math.round(data.lat * 1000) / 1000;
    const lng = Math.round(data.lon * 1000) / 1000;
    console.log("LAT:", lat)
    console.log("LNG:", lng)
    dispatch(setLat(lat));
    dispatch(setLng(lng))
    console.log("CENTER IN EVENTCARD", center)
    dispatch(showEventMapModal());
  };

    return (
      <div className="max-w-lg max-h-fit rounded overflow-hidden shadow-lg">
        <img
          className="h-56 w-full object-cover"
          alt="Event location"
          src={image_url}
        />
        <div className="px-4">
          <h2>{event_name}</h2>
          <p>{address_line1}</p>
          <p>{address_line2}</p>
          <p className="text-gray-700 text-base mb-2">
            {city}, {state} {zip_code}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <b>Event Type:</b> {event_type}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <b>Host:</b> {host.first_name} {host.last_name}{" "}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <i>{event_description}</i>
          </p>
          <p className="text-gray-700 text-base mb-2">
            <b>Start:</b>{" "}
            {new Date(start_datetime).toLocaleString([], {
              month: "numeric",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <b>End:</b>{" "}
            {new Date(end_datetime).toLocaleString([], {
              month: "numeric",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>
        </div>
        <div className="flex justify-center p-4">
          <button
            onClick={handleClick}
            className="mr-4 bg-jet-stream-500 hover:bg-jet-stream-800 text-black p-2 rounded"
          >
            Event Details
          </button>
          <button
            onClick={handleShowMap}
            className="bg-jet-stream-500 hover:bg-jet-stream-800 text-black p-2 rounded"
          >
            Show Map
          </button>
        </div>
      </div>
    );
}

export default EventCard;
