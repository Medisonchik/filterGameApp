import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import PopularGames from './components/SectionPopularGames/PopularGames';
import Footer from './components/Footer/Footer';
function HomePage(props) {
    return (
        <div>
    
            <Hero />
            <Search />
            <PopularGames />
                    
        </div>
    );
}

export default HomePage;