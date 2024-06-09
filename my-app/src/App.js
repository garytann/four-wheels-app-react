// import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import About from "./components/About";
import "./Styles/global.css"

function App() {
  return (
    <React.Fragment>
        <Navbar />
        <Hero />
        <Intro/>
        <About/>
    </React.Fragment>
  );
}

export default App;
