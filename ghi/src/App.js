import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import EventsCards from "./components/EventsCards";
import EventForm from "./components/EventForm";
import { useGetAccountQuery } from "./services/auth";

function App() {
  const { data: account } = useGetAccountQuery();
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  return (
    <>
      <Nav />
      <EventForm />
    </>
  );
}

export default App;
