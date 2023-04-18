import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LandingPage from './Components/LandingPage/LandingPage';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Carousel from './Components/Carousel/Carousel';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import Modal from "./components/Modal";
import EventsCards from "./components/EventsCards";
import EventCard from "./components/EventCard";
import EventForm from "./components/EventForm";
import { useGetAccountQuery } from "./services/auth";
import { useDispatch, useSelector } from "react-redux";
import { showSignupModal, hideSignupModal } from './features/auth/signupSlice'

function App() {
  const dispatch = useDispatch();
  const { data: account } = useGetAccountQuery();
  const { modal } = useSelector(state => state.signup)
  // const [showModal, setShowModal] = useState(false);
  // console.log("showmodal", showModal);
  // const handleOnClick = () => dispatch(showModal());
  // const handleOnClose = () => dispatch(hideModal());

  return (
    <>
      <div>
        <div className="max-w-3xl mx-auto">
          <div className="text-center py-3">
            <EventForm />
            <EventsCards />
            {/* <Modal visible={showModal} onClose={hideModal} ></Modal> */}
            <button
              type="submit"
              // // onClick={() => setShowModal(true)}
              // onClick={() => handleOnClick}
              onClick={() => dispatch(showSignupModal())}
              className="mt-4 bg-morning-glory-500 text-white py-2 px-6 rounded-md hover:bg-morning-glory-600 align-center"
            >
              Modal Button
            </button>
            <h1>Hey, {account?.account.first_name || "Friend"}</h1>
            {account ? <Logout /> : <Login />}
            <Modal visible={modal} onClose={() => dispatch(hideSignupModal())} component={<Signup />}/>

            {/* <BrowserRouter>
                  <Navbar />
                  <App />

                  <Routes>
                  <Route path="/" element= {<LandingPage />} />
                  <Routes path="/login" element={<LoginForm />} />
                  </Routes>

              </BrowserRouter> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
