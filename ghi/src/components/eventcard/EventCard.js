import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showEventDetailModal, getEventId } from "../../features/events/eventDetailSlice";
import { useDeleteEventMutation } from "../../services/events";
import { showHostingEvents } from "../../features/events/eventsPageSlice";
import { useLazyGetEventQuery } from "../../services/events";

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
  const [deleteEvent] = useDeleteEventMutation();
  // const { eventDetailModal } = useSelector(state => state.eventDetail);
  // const { eventId } = useSelector(state => state.eventDetail)
  const { userRole } = useSelector(state => state.eventsPage)
  const [ trigger, result ] = useLazyGetEventQuery(id);


  const notHosting = () => (
    <div className="flex justify-center p-4">
      <button
        onClick={handleEventDetailClick}
        className="bg-jet-stream-500 hover:bg-jet-stream-800 text-black p-2 rounded"
      >
        Event Details
      </button>
    </div>
  );

  const hosting = () => (
    <div className="flex justify-center items-baseline">
      <button
        onClick={handleUpdate}
        className="mr-8 bg-jet-stream-500 hover:bg-jet-stream-800 text-black p-2 rounded"
      >
        Update
      </button>
      <button
        onClick={handleDelete}
        className="bg-jet-stream-500 hover:bg-jet-stream-800 text-black p-2 rounded"
      >
        Delete
      </button>
    </div>
  );

  const handleEventDetailClick = async (e) => {
    dispatch(getEventId(id));
    dispatch(showEventDetailModal());
    const returnFromTrigger = await trigger(id);
  }

  const handleUpdate = (e) => {

  };

  const handleDelete = (e) => {
    dispatch(getEventId(id));
    deleteEvent(id);
    dispatch(showHostingEvents());
  };

    return (
      <div className="max-w-lg max-h-fit rounded overflow-hidden shadow-lg">
        <img
          className="h-56 w-full object-cover"
          alt="Event location"
          src={image_url}
        />
        <div className="px-4">
          <h2 className="text-jet-stream-900">{event_name}</h2>
          <p className="text-gray-700 text-base mb-2">{address_line1}</p>
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
        {userRole === "hosting" ? hosting() : notHosting()}
      </div>
    );
}

export default EventCard;
