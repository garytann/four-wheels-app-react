// import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Bookings from "./pages/Bookings"
import Lessons from "./pages/Lessons"

import "./Styles/global.css"

function App() {
  return (
      <>
      <Navbar />
      <div>
          <Routes>
              <Route path="/" element = {<Home/>}/>
              <Route path="/bookings" element = {<Bookings/>}/>
              <Route path="/lessons" element = {<Lessons/>}/>
          </Routes>
      </div>
      </>

  );
}

export default App;
