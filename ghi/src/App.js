import { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import LoginForm from './Comp
import Carousel from './Components/Carousel/Carousel';


function App() {
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
      console.log('fastapi url: ', url);
      let response = await fetch(url);
      console.log("------- hello? -------");
      let data = await response.json();

      if (response.ok) {
        console.log("got launch data!");
        setLaunchInfo(data.launch_details);
      } else {
        console.log("drat! something happened");
        setError(data.message);
      }
    }
    getData();
  }, []);


  return (
    <>
      {/* <LandingPage info={launch_info} />
      <Carousel /> */}
      ... Hello, World?
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
