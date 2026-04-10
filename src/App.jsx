import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TeamAndServices from "./pages/TeamAndServices";
import Contacts from "./pages/Contacts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
