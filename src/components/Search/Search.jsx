import React from 'react';
import './Search.css';
import categories from '../../data/gamesCategories';
import { useNavigate } from 'react-router-dom';

function Search() {    
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        navigate(`/search/${categoryName}`);
    };

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
                <div className='category-box' onClick={() => handleCategoryClick(category.category)} key={index} style={{backgroundImage: `url(${category.image})`}}>
                    <span className='category-text'>{category.category}</span>
                </div>
            ))}

        </div>
      
    </section>
  )
}

export default Search;

