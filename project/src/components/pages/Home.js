import { useState, useEffect} from "react";
import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
require('./home.css');

export const Home = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        axios
        .get("https://api.unsplash.com/search/photos?query=yoga&per_page=20&client_id=Pf1mebDZRa8U9Am9FSD5uznrYTV_fJIPHdJn1I94ri4")
        .then(res => {
          console.log(res);
          setImageUrl(res.data.results[5].urls.regular);
        })
        .catch(err => console.log(err));
      }, [])


    return (
        <>
    <div className="hero-section">
        <img src={imageUrl} alt={'товары для йоги'} width={450}/>   
        <div className='hero-text-wrapper'>
        <h1>Товары для йоги коллекции 2023</h1>
        <p>Коврики, одежда, пропсы и аксессуары для разнообразия и комфорта ваших тренировок</p>
        </div>
    </div>
    <div>
        <h2>Категории</h2>
        <div>

        </div>
    </div>
    </>
    )
}