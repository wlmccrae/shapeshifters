import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import EventsPage from './components/eventspage/EventsPage';
import Nav from './components/Nav';


function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
          <div className="container">
            <Routes>
              <Route path="/" element={<LandingPage />} />

              <Route path="events">
                <Route index element={<EventsPage />} />
                <Route path="attending" element={<EventsPage />} />
                <Route path="hosting" element={<EventsPage />} />
              </Route>

            </Routes>
          </div>
      </BrowserRouter>
    </>
  );


}

export default App;
