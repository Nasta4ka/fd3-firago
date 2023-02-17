import { useState, useEffect} from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
require('./home.css');

export const Home = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [imageCat1, setImageCat1] = useState('');
    const [imageCat2, setImageCat2] = useState('');
    const [imageCat3, setImageCat3] = useState('');
    const [imageCat4, setImageCat4] = useState('');

    useEffect(() => {
        axios
        .get("https://api.unsplash.com/search/photos?query=yoga&per_page=20&client_id=Pf1mebDZRa8U9Am9FSD5uznrYTV_fJIPHdJn1I94ri4")
        .then(res => {
          console.log(res);
          setImageUrl(res.data.results[5].urls.regular);
          setImageCat1(res.data.results[16].urls.small);
          setImageCat2(res.data.results[8].urls.small);
          setImageCat3(res.data.results[3].urls.small);
          setImageCat4(res.data.results[13].urls.small);
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
        <h2 className="title-for-categories">категории</h2>
        <div className="categories-wrapper">
   <Link className={'category-img'} to='/products/mats'>
    <h3 className="category-title"> коврики</h3>
    <img src={imageCat1} alt={'товары для йоги'} width={250}/>   
   </Link>
   <Link className={'category-img'} to='/products/clothes'>
    <h3 className="category-title">одежда</h3>
    <img src={imageCat2} alt={'товары для йоги'} width={250}/>   
   </Link>
   <Link className={'category-img'} to='/products/props' >
    <h3 className="category-title">пропсы</h3>
    <img src={imageCat3} alt={'товары для йоги'} width={250}/>   
   </Link>
   <Link className={'category-img'} to='/products/extra'>
    <h3 className="category-title">аксессуары</h3>
    <img  src={imageCat4} alt={'товары для йоги'} width={250}/>   
   </Link>
        </div>
    </div>
    </>
    )
}