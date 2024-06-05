import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import BuyNowPage from './BuyNowPage';
import { UserProvider } from './UserContext';
import './App.css';

function App() {
  return (
    // Wrap the application in UserProvider to provide context to all components
    <UserProvider>
      {/* Set up the router for navigation between different pages */}
      <Router>
        <Routes>
          {/* Define the route for the landing page */}
          <Route path="/" element={<LandingPage />} />
          {/* Define the route for the buy now page without productId */}
          <Route path="/buy-now" element={<BuyNowPage />} />
          {/* Define the route for the buy now page with a productId parameter */}
          <Route path="/buy-now/:productId" element={<BuyNowPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

