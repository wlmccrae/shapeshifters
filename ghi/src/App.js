import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import EventsCards from "./components/EventsCards";
import { useGetAccountQuery } from "./services/auth";

function App() {
  const { data: account } = useGetAccountQuery();
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  return (
    <>
      <Nav />
    </>
  );
}

export default App;
