import React, { useState, useEffect } from 'react';
import './Meme.css';

export function Meme({ getMemeImage, getText }) {
    const [formData, setFormData] = useState({
        topText: '',
        bottomText: '',
    });

    function returnMemeImage(e) {
        e.preventDefault();
        getMemeImage();
    }

    function formChange(e) {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value,
            };
        });
        getText(formData);
    }

    return (
        <form className='meme'>
            <div className='meme--inputs'>
                <input
                    className='meme--input__top'
                    type='text'
                    onChange={formChange}
                    placeholder='Top Text'
                    name='topText'
                />
                <input
                    className='meme--input__bottom'
                    type='text'
                    onChange={formChange}
                    placeholder='Bottom Text'
                    name='bottomText'
                />
            </div>
            <button onClick={returnMemeImage} className='meme--button'>
                <span>Get a new meme image </span>
                <img src='./assets/input-image.png' alt='' />
            </button>
        </form>
    );
}
