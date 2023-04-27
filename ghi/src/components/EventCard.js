import React from "react";

const EventCard = ({
    id,
    event_name,
    event_description,
    image_url
}) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" alt="venue" src={image_url}/>
        <h2>{event_name}</h2>
        <p>{event_description}</p>
      </div>
    );
}

export default EventCard;
