import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showEventDetailModal, getEventId } from "../../features/events/eventDetailSlice";
import { useDeleteEventMutation } from "../../services/events";
import { showHostingEvents } from "../../features/events/eventsPageSlice";
import { useLazyGetEventQuery } from "../../services/events";
import { showEventMapModal, setLat, setLng } from "../../features/events/eventMapSlice";


const EventCard = ({
    id,
    event_name,
    event_type,
    address_line1,
    address_line2,
    city,
    state,
    zip_code,
    start_datetime,
    end_datetime,
    image_url,
    host,
    lat,
    lon,
}) => {
  const dispatch = useDispatch();
  const [deleteEvent] = useDeleteEventMutation();

  const { userRole } = useSelector((state) => state.eventsPage);
  const [trigger] = useLazyGetEventQuery(id);

  const notHosting = () => (
    <div className="flex justify-center mr-3 items-baseline text-jet-stream-900">
      <button
        onClick={handleEventDetailClick}
        className="mr-8 bg-jet-stream-500 hover:bg-jet-stream-800 text-jet-stream-900  hover:text-jet-stream-100 p-2 rounded mb-6 mt-4"
      >
        Event Details
      </button>
      <button
        onClick={handleShowMap}
        disabled={lat == null || lon == null}
        className={`p-2 rounded mb-6 mt-4 ${lat == null || lon == null ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-jet-stream-500 hover:bg-jet-stream-800 text-jet-stream-900 hover:text-jet-stream-100"}`}
      >
        Show Map
      </button>
    </div>
  );

  const hosting = () => (
    <div className="flex justify-center items-baseline">
      <button
        onClick={handleUpdate}
        className="mr-8 bg-jet-stream-500 hover:bg-jet-stream-800 text-jet-stream-900 p-2 rounded mb-6 mt-4"
      >
        Update
      </button>
      <button
        onClick={handleDelete}
        className="bg-jet-stream-500 hover:bg-jet-stream-800 text-jet-stream-900 p-2 rounded mb-6 mt-4"
      >
        Delete
      </button>
    </div>
  );

  const handleEventDetailClick = async (e) => {
    dispatch(getEventId(id));
    dispatch(showEventDetailModal());
    await trigger(id);
  };

  const handleUpdate = (e) => {};

  const handleDelete = (e) => {
    dispatch(getEventId(id));
    deleteEvent(id);
    dispatch(showHostingEvents());
  };

  const handleShowMap = async (e) => {
    dispatch(getEventId(id));
    dispatch(showEventMapModal());
    const result = await trigger(id);
    const lat = Math.round(result.data.lat * 1000) / 1000;
    const lng = Math.round(result.data.lon * 1000) / 1000;
    dispatch(setLat(lat));
    dispatch(setLng(lng));
  };

  return (
    <div className="max-w-lg max-h-fit rounded overflow-hidden hover:scale-105 shadow-lg hover:shadow-2xl hover:bg-opacity-50 transition-all duration-300">
      <img
        className="h-56 w-full object-cover"
        alt="Event location"
        src={image_url}
      />
      <div className="px-4 text-jet-stream-900">
        <h2 className="text-jet-stream-900">{event_name}</h2>
        <p className="text-base mb-2">{address_line1}</p>
        <p>{address_line2}</p>
        <p className="text-base mb-2">
          {city}, {state} {zip_code}
        </p>
        <p className="text-base mb-2">
          <b>Event Type:</b> {event_type}
        </p>
        <p className="text-base mb-2">
          <b>Host:</b> {host.first_name} {host.last_name}{" "}
        </p>
        {/* <p className="text-base mb-2">
          <i>{event_description}</i>
        </p> */}
        <p className="text-base mb-2">
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
        <p className="text-base mb-2">
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

      {userRole === "hosting" ? hosting() : notHosting()}
    </div>
  );
}

export default EventCard;
