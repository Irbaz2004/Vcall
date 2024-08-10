import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import Roompage from "./Pages/Room/Roompage";
import Nav from "./Pages/Home/Nav";

export default function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/room/:roomId" element={<Roompage />} />
      </Routes>
    </>
  );
}


