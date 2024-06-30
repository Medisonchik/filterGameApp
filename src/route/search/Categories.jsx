import React, { useState } from 'react';
import categories from '../../data/gamesCategories';
import './Categories.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';



function Categories(props) {
    const [inputValue, setInputValue] = useState('');
    

    return (
        <div className='categories-container'>
            <div className='search-input'>  
                <FontAwesomeIcon icon={faSearch} className='font-awesome-icon search-icon' />         
                <input 
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type game's category..."
                />
            </div>
            <div className='categories-list'>
                <span className='heading'>Suggestions</span>
                <div className='list'>
                    {categories && categories.map((category, index) => (
                        <span key={index} className='list-category'>{category.category}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Categories;