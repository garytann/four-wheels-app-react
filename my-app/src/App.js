// import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import "./Styles/global.css"

function App() {
  return (
    <React.Fragment>
        <Navbar />
        <Hero />
        <Intro/>
    </React.Fragment>
  );
}

export default App;
