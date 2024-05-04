import React from 'react';
import './PopularGames.css';
import listOfGames from './listOfGames';

function PopularGames() {
  return (
    <section className='section-popularGames'>
      <h2 className='section-title'>popular games</h2>
      <div className='cards'>
        {listOfGames.map((game, index) => (
          <div className='card' key={index}>
            {/* Game image */}
            <img className='card-img' src={game.image} alt={game.name} />
            {/* Game information */}
            <div className='card-information'>
              <span className='card-category'>{game.category}</span>
              <h3 className='card-name'>{game.name}</h3>
              <span className='card-subtext'>{game.duration}</span>             
            </div>
            
            <button type='button' className='card-btn'>Add to favorite</button>
          </div>
        ))}
      </div>


      
    </section>
  )
}

export default PopularGames;
