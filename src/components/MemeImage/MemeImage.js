import React from 'react';
import './MemeImage.css';

export function MemeImage({ meme }) {
    return (
        <div className='meme-image'>
            <h2 className='meme--text top'>{meme.topText}</h2>
            <img src={meme.randomImage} alt='meme' />
            <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        </div>
    );
}
