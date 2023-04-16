import { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LandingPage from './Components/LandingPage/LandingPage';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Carousel from './Components/Carousel/Carousel';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Modal from './components/Modal';
import EventsCards from './components/EventsCard';
import EventCard from './components/Event';
import EventForm from './components/EventForm';
import { useGetAccountQuery } from './services/auth';

function App() {
  const { data: account } = useGetAccountQuery()
  const [showModal, setShowModal] = useState(false);
  console.log("showmodal", showModal);

  const handleOnClose = () => setShowModal(false);

  return (
    <>
      <div>
        <div className="max-w-3xl mx-auto">
          <div className="text-center py-3">
            <EventForm />
            <EventsCards />
            {/* <Modal onClose={handleOnClose} visible={showModal} login={<Login />}/>
            <button
              type="submit"
              onClick={() => setShowModal(true)}
              className="mt-4 bg-morning-glory-500 text-white py-2 px-6 rounded-md hover:bg-morning-glory-600 align-center"
            >
              Modal Button
            </button>
            {/* <h1>Hey, {account?.account.first_name || "Friend"}</h1> */}
            {account ? <Logout /> : <Login />}
            <Signup />

            <Modal onClose={handleOnClose} visible={showModal} >
            <Login />
            </ Modal>


          </div>
        </div>
      </div>
    </>
  );
}

export default App;


{/* <BrowserRouter>
  <App />
  <Navbar />

  <Routes>
  <Route path="/" element= {<LandingPage />} />
  <Routes path="/login" element={<LoginForm />} />
  </Routes>

  </BrowserRouter> */}
