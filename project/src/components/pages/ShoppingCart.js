import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../elements/ProductPreview';
import { NavLink } from 'react-router-dom';
import {deleteFromCart, deleteAll} from "../../redux/cartSlice"; 
import { FaRegMeh } from "react-icons/fa";
require('./shoppingCart.css');


export const ShoppingCart = () => {  
  const dispatch = useDispatch()
   const items = useSelector(state => state.cart.itemsInCart);   
   let totalPrice = 0;
   if(items.length) {
    let initialValue = 0;
    totalPrice = items.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.price * currentValue.quantity);
    }, initialValue)
   }

   const deleteProduct = (id, quantity) => {
    dispatch(deleteFromCart([id, quantity]))
   }

   const orderProducts = () => {
console.log(items)
   }

  return (
    <>
      <div className="shoppingCart">
        {items.map((item) => (
          <div className={"shoppingItem"}>
            <Product product={item} key={item.id} />
            <span>
              за {item.quantity}шт: <b>{item.quantity * item.price}$</b>
            </span>
            <button className='delete-btn' onClick={() => deleteProduct(item.id, item.quantity)}>
              удалить
            </button>
          </div>
        ))}
      </div>
      {items.length ? (
        <>
        <button className={'button-3 btn'} onClick={() => orderProducts()}>
          <NavLink className={'link'} to={'/order'} state={{items, totalPrice}}>начать оформление</NavLink>
          </button>
        <div><b>всего к оплате: {totalPrice}$ </b></div>
        <button className='delete-all' onClick={() => dispatch(deleteAll())}>
          <span>удалить всё &nbsp;</span><FaRegMeh />
        </button>
        </>
      ) : (
        <span>в корзине пока ничего нет</span>
      )}
    </>
  );
}
