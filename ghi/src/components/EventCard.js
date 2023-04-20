import React from "react";

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
    return (
      <div className="max-w-lg max-h-fit rounded overflow-hidden shadow-lg">
        <img className="h-56 w-full object-cover" alt="Event photo" src={image_url}/>
        <h3>Event ID: {id}, Host ID: {host.host_id}</h3>
        <div className="px-4">
          <h2>{event_name}</h2>
          <p>{address_line1}</p>
          <p>{address_line2}</p>
          <p className="text-gray-700 text-base mb-2">{city}, {state} {zip_code}</p>
          <p className="text-gray-700 text-base mb-2"><b>Event Type:</b> {event_type}</p>
          <p className="text-gray-700 text-base mb-2" ><b>Host:</b> {host.first_name} {host.last_name} </p>
          <p className="text-gray-700 text-base mb-2"><i>{event_description}</i></p>
          <p className="text-gray-700 text-base mb-2"><b>Start:</b> {new Date(start_datetime).toLocaleString([], { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</p>
          <p className="text-gray-700 text-base mb-2"><b>End:</b> {new Date(end_datetime).toLocaleString([], { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</p>
        </div>
        <div className="flex justify-center p-4">
          <button className="bg-jet-stream-500 hover:bg-jet-stream-800 text-black p-2 rounded-full">
            Event Details
          </button>
        </div>
      </div>
    );
}

export default EventCard;
