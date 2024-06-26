import React from 'react';
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import About from "../components/About";
import Quote from "../components/Quote";

function Home (){
    return(
        <React.Fragment>
            <Hero/>
            <Intro/>
            <About/>
            <Quote
            quote={"SPORTS , SKATE & CO"}
            />
        </React.Fragment>
    )
}

export default Home;