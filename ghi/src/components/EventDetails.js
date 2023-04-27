import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { hideEventDetailModal } from '../features/events/eventDetailSlice';
import { useLazyGetEventQuery } from "../services/events";
import { useAddAttendeeMutation } from "../services/attendees";

import { reset } from '../features/attendees/addAttendeeSlice';


import Modal from './Modal';


const EventDetails = ({ event }) => {
  const dispatch = useDispatch();
  // Event Detail Modal boolean and eventId with initial state of zero
  // When the user clicks on an event card, the eventId gets set to the id on
  // the event that was clicked. The id can then be accessed by using eventId.payload
  const { eventDetailModal, eventId } = useSelector(
    (state) => state.eventDetail
  );

  // Query /api/event/{event_id} using the LazyQuery so it does not
  // call when there is no event id

  const [ trigger, result ] = useLazyGetEventQuery(eventId.payload);
  const [addAttendee] = useAddAttendeeMutation(eventId.payload);

  useEffect(() => {
    if (eventDetailModal) {
      trigger(eventId.payload);
    }
  }, [eventDetailModal])
  // The handleSubmit for the eventDetail
  const handleSubmit = (e) => {
    // prevents the default action on the form
    e.preventDefault();
    // calls the addCreateAttendeeMutation with the id of the
    // selected event
    addAttendee(eventId.payload);
    // dispatches hideEventDetailModal to close the modal
    dispatch(hideEventDetailModal());
    // sets the userId in the state of addAttendeeSlice back
    // to zero
    dispatch(reset());
  };
  return (
    result.data && (
      <Modal
        visible={eventDetailModal}
        onClose={() => dispatch(hideEventDetailModal())}
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto max-w-lg">
          <div className="mt-4 mb-4 bg-white shadow-md rounded-lg">
            <div className="h-2 bg-jet-stream-500 rounded-t-md"></div>
            <h2 className="px-4 text-2xl text-white bg-jet-stream-500 pb-3">
              {result.data.event_name}
            </h2>
            <img
              className="h-56 w-full object-cover"
              alt="Event location"
              src={result.data.image_url}
            />
            <form onSubmit={handleSubmit}>
              <div className="px-4">
                <h2 className="text-jet-stream-900">
                  {result.data.event_type}
                </h2>
                <p className="text-gray-700 text-base mb-2">
                  {result.data.address_line1}
                </p>
                <p>{result.data.address_line2}</p>
                <p className="text-gray-700 text-base mb-2">
                  {result.data.city}, {result.data.state} {result.data.zip_code}
                </p>
                <p className="text-gray-700 text-base mb-2">
                  <b>Event Type:</b> {result.data.event_type}
                </p>
                <p className="text-gray-700 text-base mb-2">
                  {/* <b>Host:</b> {host.first_name} {host.last_name}{" "} */}
                </p>
                <p className="text-gray-700 text-base mb-2">
                  <i>{result.data.event_description}</i>
                </p>
                <p className="text-gray-700 text-base mb-2">
                  <b>Start:</b>{" "}
                  {new Date(result.data.start_datetime).toLocaleString([], {
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
                  {new Date(result.data.end_datetime).toLocaleString([], {
                    month: "numeric",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
                <button
                  type="submit"
                  className="mt-4 mb-3 bg-jet-stream-500 text-white py-2 px-6 rounded-md hover:bg-jet-stream-600"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    )
  );
};

export default EventDetails;
