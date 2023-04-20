import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { hideEventDetailModal } from '../features/events/eventDetailSlice';
import Modal from './Modal';

const EventDetails = ({
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
  const dispatch = useDispatch()
  const { eventDetailModal } = useSelector(state => state.eventDetail)
  return (
    <Modal
      visible={eventDetailModal}
      onClose={() => dispatch(hideEventDetailModal())}
    >
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
            {/* <b>Host:</b> {host.first_name} {host.last_name}{" "} */}
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
      </div>
    </Modal>
  );
};

export default EventDetails;