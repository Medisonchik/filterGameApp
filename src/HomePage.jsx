import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';

function HomePage(props) {
    return (
        <div>
            <Navbar />
            <Hero />
            <Search />
            
        </div>
    );
}

export default HomePage;