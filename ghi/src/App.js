import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );

}

export default App;
