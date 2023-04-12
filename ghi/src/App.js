// import { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LandingPage from './Components/LandingPage/LandingPage';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import Carousel from './Components/Carousel/Carousel';
import Login from './components/Login';
import Logout from './components/Logout';
import { useGetAccountQuery } from './services/auth';

function App() {
  const { data: account } = useGetAccountQuery()
  console.log("ACCOUNT: ", {account});

  const showLoginForm = () => (
    <Login />
  )


  return (
    <>
      {/* <LandingPage info={launch_info} />
      <Carousel /> */}
      <h1>Hey, {account?.account.first_name || 'Friend'}</h1>
      {account ? <Logout /> : showLoginForm()}
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
