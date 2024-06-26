import React from 'react';
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import About from "../components/About";

function Home (){
    return(
        <React.Fragment>
            <Hero/>
            <Intro/>
            <About/>
        </React.Fragment>
    )
}

export default Home;