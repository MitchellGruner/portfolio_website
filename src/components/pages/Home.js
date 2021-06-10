import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import ShortAbout from '../ShortAbout';

function Home () {
    return (
        <>
            <HeroSection />
            <ShortAbout />
            <Cards />
        </>
    );
}

export default Home;