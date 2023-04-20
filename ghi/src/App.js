import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import Nav from './components/Nav';


function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
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
