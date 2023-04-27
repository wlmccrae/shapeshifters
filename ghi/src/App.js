import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import EventsPage from './components/eventspage/EventsPage';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <BrowserRouter>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="events">
              <Route index element={<EventsPage />} />
              <Route path="attending" element={<EventsPage />} />
              <Route path="hosting" element={<EventsPage />} />
            </Route>

          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );


}

export default App;
