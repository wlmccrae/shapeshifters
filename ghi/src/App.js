import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import EventsCards from "./components/EventsCards";
import { useGetAccountQuery } from "./services/auth";

function App() {

  return (
    <>
      <Nav />
    </>
  );

}

export default App;
