import { useState, useEffect } from "react";
import './App.css';
import NavBar from "./components/NavBar";
import { useGetAccountQuery } from "./services/auth";

function App() {
  const { data: account } = useGetAccountQuery();
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
