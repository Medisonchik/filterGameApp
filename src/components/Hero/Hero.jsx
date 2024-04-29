import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className='hero-section'>
        <div className='hero-text'>
            <h1>Find your game</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate praesentium perspiciatis ratione. Aliquam molestias id omnis, sint, illum laboriosam quasi vel sunt quidem tempore et, excepturi aperiam? Eligendi, saepe minus.
            </p>
            <button className='hero-btn' type='button'>get started today</button>
        </div>
        <div className='image-container'>
            <img className='hero-img' src='/hero.jpeg' alt='hero-image' /> 
        </div>
      
    </section>
  )
}

export default Hero;
