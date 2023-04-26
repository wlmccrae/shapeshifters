import React from "react";
import { useGetHostingEventsQuery } from "../services/events";
import EventCard from "./eventcard/EventCard";

const EventsHostingCards = ({ event }) => {
  const { data, isLoading } = useGetHostingEventsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (data?.length === 0) return <div>No events</div>;

  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((event) => (
        <EventCard key={"hosting " + event.id.toString()} {...event} />
      ))}
    </div>
  );
};

export default EventsHostingCards;
