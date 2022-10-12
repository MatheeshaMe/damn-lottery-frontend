import React, { useState, useEffect } from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Timer from "./components/timer/Timer";

function App() {
  return <div className="container">
    <Navbar/>
    <Timer/>
    <Hero/>
  </div>;
}

export default App;
