import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Rooms from "./Pages/Rooms";
import RoomsDetailes from "./Pages/RoomsDetailes";
import Booking from "./Pages/Booking";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomsDetailes />} />
          <Route path="/my-bookings" element={<Booking />} />
          <Route path="/dashboard" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Dashboard Coming Soon!</h1></div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
