import React, { useState } from 'react';
import InitialView from './components/InitialView';
import LandingPage from './components/LandingPage';

function App() {
  const [showLanding, setShowLanding] = useState(false);

  const handleInitialViewComplete = () => {
    setShowLanding(true);
  };

  return (
    <div>
      {!showLanding ? (
        <InitialView onComplete={handleInitialViewComplete} />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}

export default App;
