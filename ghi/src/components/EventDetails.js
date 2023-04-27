import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { hideEventDetailModal } from '../features/events/eventDetailSlice';

import { useLazyGetEventQuery } from "../services/events";

import { hideEventMapModal } from '../features/events/eventMapSlice';
import { useGetEventQuery } from "../services/events";

import { useGetAccountQuery } from '../services/auth';
import { useAddAttendeeMutation } from "../services/attendees";

import { getAttendeeId, reset } from '../features/attendees/addAttendeeSlice';

import Modal from './Modal';
import EventMap from './EventMap'


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

  // Get the center and the eventMapModal from eventMapSlice
  const { center, eventMapModal } = useSelector(state => state.eventMap);

  const [addAttendee] = useAddAttendeeMutation(eventId.payload);

  useEffect(() => {
    if (eventDetailModal || eventMapModal) {
      trigger(eventId.payload);
    }
  }, [eventDetailModal, eventMapModal])

  useEffect(() => {
    if (eventMapModal) {
      trigger(eventId.payload);
    }
  }, [eventMapModal]);


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

  // The handleOnClose for the Modal on this page
  const handleOnClose = (e) => {
    if (eventDetailModal) {
      dispatch(hideEventDetailModal());
    } else {
      dispatch(hideEventMapModal());
    }
  };
  const eventDetailView = () => (
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
            <h2>{result.data.event_name}</h2>
            <p>{result.data.address_line1}</p>
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
  );
  return (
    result.data && (
      <Modal
        visible={eventDetailModal || eventMapModal}
        onClose={handleOnClose}
      >
        {eventDetailModal ? eventDetailView() : <EventMap center={center}/>}
      </Modal>
    )
  );
};

export default EventDetails;