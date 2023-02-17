import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useLocation} from "react-router-dom"
import { db } from "../../config/firebase"
import { addDoc, collection  } from "firebase/firestore"
import { useState } from "react"
import {deleteAll} from "../../redux/cartSlice"; 
import { useDispatch } from "react-redux"
 require('./orderSummary.css');

export const OrderSummary = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { state } = location;
    const ordersCollectionRef = collection(db, "orders")
    const dispatch = useDispatch();
    const [isOrdered, setIsOrdered] = useState(false)
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [nameLabel, setNameLabel] = useState('ваше имя')
    const [telLabel, setTelLabel] = useState('ваш номер')
    const [message, setMessage] = useState('')

    useEffect(() => {
  let str;
  str = state.items.map(item => str = `${item.name}(id : ${item.id}), ${item.quantity}шт; ` )
    setMessage(str)
    }, [])
    
    
    const orderProducts = async(e) => { 
        e.preventDefault()
        try{
          await addDoc(ordersCollectionRef, {name:name, tel: telephone, ifo: message, totalPrice: state.totalPrice})
         dispatch(deleteAll());
          setIsOrdered(true) 
        }
        catch{
          alert(<span>чтото пошло не так, попробуйте позже</span>)
        }
      }
      
      

    return <>
   { state.items &&
   <>
  {!isOrdered && 
   <form className={'contact-form'} onSubmit={orderProducts}>
    <label className="label">
    <input type='text' name='name' onChange={(e)=>setName(e.target.value)} value={name} placeholder="ваше имя"/>
    {nameLabel}
    </label>
    <label className="label">
    <input input type="text" name='telephone' onChange={(e)=>setTelephone(e.target.value)} value={telephone} placeholder='+375 XX XXX XX XX'/>
    {telLabel}
    </label>
    <div><b>к оплате {state.totalPrice}$</b></div>
    <p>{message}</p>
    <button type='submit' className="button-3">заказать</button>
  </form>}
  {isOrdered && 
  <>
  <h1>успешно!</h1>
  <button className="frame-btn" onClick={() => navigate('/')}>в магазин</button></>}

   </>}
</>
}