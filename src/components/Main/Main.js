import React, { useState, useEffect } from 'react';
import './Main.css';
import { Meme } from '../Meme/Meme';
import { MemeImage } from '../MemeImage/MemeImage';
import axios from 'axios';

export function Main() {
    const [allMemeImages, setAllMemeImages] = useState([]);
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg',
    });

    useEffect(() => {
        axios.get('https://api.imgflip.com/get_memes').then((res) => {
            setAllMemeImages(res.data.data.memes);
        });
    }, []);

    function getText(formData) {
        setMeme((prevValue) => {
            return { ...prevValue, ...formData };
        });
    }

    function getMemeImage() {
        const randomIndex = Math.floor(
            Math.random() * allMemeImages.length - 1
        );
        const randomImage = allMemeImages[randomIndex].url;

        setMeme((prevValue) => {
            return { ...prevValue, randomImage };
        });
    }

    return (
        <main className='main'>
            <Meme getText={getText} getMemeImage={getMemeImage} />
            <MemeImage meme={meme} />
        </main>
    );
}
