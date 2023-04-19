import { useState, useEffect } from "react";
import './App.css';
import NavBar from "./components/NavBar";
import EventsCards from "./components/EventsCards";
import { useGetAccountQuery } from "./services/auth";
import { useDispatch, useSelector } from "react-redux";
import { showSignupModal, hideSignupModal } from './features/auth/signupSlice'
import { showLoginModal, hideLoginModal } from "./features/auth/loginSlice";

function App() {
  const dispatch = useDispatch();
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
