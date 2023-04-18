import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetEventsQuery } from "../services/events";
import EventCard from "./EventCard";

const EventsCards = ({ event }) => {
  const { data, isLoading } = useGetEventsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (data?.length === 0) return <div>No events</div>;
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};

export default EventsCards;
