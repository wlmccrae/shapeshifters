import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { hideEventDetailModal } from '../features/events/eventDetailSlice';
import { useGetEventQuery } from "../services/events";
import Modal from './Modal';
import EventCard from './eventcard/EventCard';

const EventDetails = ({ event }) => {
  const dispatch = useDispatch()
  const { eventDetailModal, eventId } = useSelector(state => state.eventDetail)
  const { data, isLoading } = useGetEventQuery(eventId.payload);
  // Make attendees.js in attendees services
  // Then call it here
  if (isLoading) return <div>Loading...</div>;
  return (
    data && (
      <Modal
        visible={eventDetailModal}
        onClose={() => dispatch(hideEventDetailModal())}
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto max-w-lg">
          <div className="mt-4 mb-4 bg-white shadow-md rounded-lg">
            <div className="h-2 bg-jet-stream-500 rounded-t-md"></div>
            <h2 className="px-4 text-2xl text-white bg-jet-stream-500 pb-3">
              {data.event_name}
            </h2>
            <img
              className="h-56 w-full object-cover"
              alt="Event location"
              src={data.image_url}
            />
            <div className="px-4">
              <h2>{data.event_name}</h2>
              <p>{data.address_line1}</p>
              <p>{data.address_line2}</p>
              <p className="text-gray-700 text-base mb-2">
                {data.city}, {data.state} {data.zip_code}
              </p>
              <p className="text-gray-700 text-base mb-2">
                <b>Event Type:</b> {data.event_type}
              </p>
              <p className="text-gray-700 text-base mb-2">
                {/* <b>Host:</b> {host.first_name} {host.last_name}{" "} */}
              </p>
              <p className="text-gray-700 text-base mb-2">
                <i>{data.event_description}</i>
              </p>
              <p className="text-gray-700 text-base mb-2">
                <b>Start:</b>{" "}
                {new Date(data.start_datetime).toLocaleString([], {
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
                {new Date(data.end_datetime).toLocaleString([], {
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
          </div>
        </div>
      </Modal>
    )
  );
};

export default EventDetails;