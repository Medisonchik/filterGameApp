import React from 'react';
import './Search.css';


function Search() {
  return (
    <section className='game-search-section'>
        <div className='search-section'>
            <h2 className='title-search-section'>Search <span className='red'>Games</span></h2>
            <span className='grey subtext'>Search your favorite game in one click</span>
            <div className='search'>
                <input type="text" placeholder="Search..."/>
                <button type="submit" className='search-btn'>Search</button>
            </div>
        </div>
        <div className='category-section'>

        </div>
      
    </section>
  )
}

export default Search;

