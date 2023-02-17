import React from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ButtonsToBuy } from '../elements/ButtonsToBuy';
require('./productCard.css');
export const ProductCard = (props) => {
  const params = useParams()
  const docRef = doc(db, 'listOfProducts', params.id) 
  const [product, setProduct] = useState([])

  useEffect(() => {
    const getData = async () => {
      try{
        const docSnap = await getDoc(docRef);
        setProduct(docSnap.data());
  }
    catch(e) {
alert('такого товара не существует')
    }
    }
    getData()
    }, [])

  return (
    product &&
    <> 
    <h2>{product.name}</h2>
    <div className='product-card' style={{overflowX: 'hidden'}}>
      <img src={product.link} alt={product.name} height={200} width={'auto'}/>
        <ButtonsToBuy cardData={product} key={params.id+'buttonsForCard'} id={params.id}/>
     </div>
     <h3 className='description-title'>Описание:</h3>
  <p className='product-card-description'>{product.description}</p>
  </>

)
}
