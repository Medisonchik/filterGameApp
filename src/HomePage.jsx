import React from 'react';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import PopularGames from './components/SectionPopularGames/PopularGames';

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