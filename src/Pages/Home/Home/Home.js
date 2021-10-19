import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Feedback from '../Feedback/Feedback';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Feedback></Feedback>
            <About></About>
        </div>
    );
};

export default Home;