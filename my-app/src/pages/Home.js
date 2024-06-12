import React from 'react';
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import About from "../components/About";
import Quote from "../components/Quote"

function Home (){
    return(
        <React.Fragment>
            <Hero />
            <Intro/>
            <About/>
            <Quote
            quoteImg="https://images.unsplash.com/photo-1707126602667-85e8ca0e8314?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            quoteText="The best way to predict the future is to create it"
            quoteAuthor="Peter Drucker"
            />
        </React.Fragment>
    )
}

export default Home;