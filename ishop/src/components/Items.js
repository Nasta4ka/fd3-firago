import React from 'react'
import './items.css'
import PropTypes from 'prop-types'



export default function Items(props) {
  return (
    <section className='items'>
    <h2 className='items_title'>будь в тренде с {props.shopName}</h2>
    <ul className='item_list'>
      {props.shopItems.map(el => (
      <li key={el.code} className='item'>
        <span>{el.name}</span>
        <span><b>{el.price}$</b></span>
        <img src={el.url} width={250} alt='товар'/>
        <span>на складе: {el.stock}</span>
        </li>))}
    </ul>
    </section>
  )
}

Items.propTypes = {
  shopName: PropTypes.string,
  shopItems: PropTypes.array,
}
/* Items.defaultProps = {shopName: "SHOP"} */