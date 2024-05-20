import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import BuyNowPage from './BuyNowPage';
import { UserContext } from './UserContext';
import data from './data.json';
import './App.css'

function App() {
  // State to hold the list of items (products)
  const [items, setItems] = useState([]);

  // useEffect hook to load products from data.json when the component mounts
  useEffect(() => {
    setItems(data.products);
    // console.log("Products Updated", data.products);
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* Provide the items (products) to the entire application via context */}
        <UserContext.Provider value={items}>
          <Routes>
            {/* Route for the landing page where products are displayed */}
            <Route path="/" element={<LandingPage />} />
            {/* Route for the buy now page (checkout page) with product ID as a URL parameter */}
            <Route path="/buy-now/:productId" element={<BuyNowPage />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
