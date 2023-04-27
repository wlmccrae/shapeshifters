import React from "react";
import { useGetAttendingEventsQuery } from "../services/events";
import EventCard from "./eventcard/EventCard";

const EventsAttendingCards = ({ event }) => {
  const { data, isLoading } = useGetAttendingEventsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (data?.length === 0) return <div>No events</div>;

  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((event) => (
        <EventCard key={"attending " + event.id.toString()} {...event} />
      ))}
    </div>
  );
};

export default EventsAttendingCards;
