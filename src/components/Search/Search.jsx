import React from 'react';
import './Search.css';
import MediaQuery from 'react-responsive';

function Search() {
    let categories = [
        {
            image: "./adventureGames.jpeg",
            category: "Adventure games",    
        },
        {
            image: "./actionGames.webp",
            category: "Action games",    
        },
        {
            image: "./survivalGames.jpeg",
            category: "Survival games",    
        },
        {
            image: "./puzzleGames.jpeg",
            category: "Puzzle games",    
        },
        {
            image: "./strategyGames.jpeg",
            category: "Strategy games",    
        },
        {
            image: "./casualGames.jpeg",
            category: "Casual games",    
        },
        {
            image: "./mmorpg.jpeg",
            category: "MMORPG",    
        },
        {
            image: "./platformer.jpeg",
            category: "Platformer",    
        },
        {
            image: "./fightingGames.jpeg",
            category: "Fighting games",    
        },
        {
            image: "./sportGames.jpeg",
            category: "Sport games",    
        },
        {
            image: "./horrorGames.jpeg",
            category: "Horror games",    
        },
        {
            image: "./cardGames.jpeg",
            category: "Card games",    
        },

    ];
  return (
    <section className='game-search-section'>
        {/* Search section */}
        <div className='search-section'>
            <h2 className='title-search-section'>Search <span className='red'>Games</span></h2>
            <span className='grey subtext'>Search your favorite game in one click</span>
            <div className='search'>
                <input type="text" placeholder="Search..."/>
                <button type="submit" className='search-btn'>Search</button>
            </div>
        </div>

        {/* Category grid */}
        <div className='category-section'>
            {categories.map((category, index) => index < 6 &&  (
                <div className='category-box' key={index} style={{backgroundImage: `url(${category.image})`}}>
                    <span className='category-text'>{category.category}</span>
                </div>
            ))}

        </div>

      
    </section>
  )
}

export default Search;

