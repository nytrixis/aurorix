import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InitialView from './components/InitialView';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [showLanding, setShowLanding] = useState(false);

  const handleInitialViewComplete = () => {
    setShowLanding(true);
  };

  return (
    <Router>
      {!showLanding ? (
        <InitialView onComplete={handleInitialViewComplete} />
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
