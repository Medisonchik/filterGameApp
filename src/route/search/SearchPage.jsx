import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from './Categories';
import "./SearchPage.css"; 

function SearchPage(props) {
    const { category } = useParams();

    return (
        /* Grid section */
        <div className='grid-category-games'>
            <div className='category-section'>
               <Categories />
            </div>
            <div className='game-section'>
                game section

            </div>
                        
        </div>
    );
}

export default SearchPage;