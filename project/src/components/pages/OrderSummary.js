import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { deleteAll } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
require("./orderSummary.css");

export const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const ordersCollectionRef = collection(db, "orders");
  const dispatch = useDispatch();
  const [isOrdered, setIsOrdered] = useState(false);
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [nameError, setNameError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if(state) {
    let str;
    str = state.items.map(
      (item) => (str = `${item.name}(id : ${item.id}), ${item.quantity}шт; `)
    );
    setMessage(str);}
  }, []);

  const orderProducts = async () => {
    try {
      await addDoc(ordersCollectionRef, {
        name: name,
        tel: telephone,
        ifo: message,
        totalPrice: state.totalPrice,
      });
      dispatch(deleteAll());
      setIsOrdered(true);
    } catch {
      alert(<span>чтото пошло не так, попробуйте позже</span>);
    }
  };

  const handleProducts = (e) => {
    e.preventDefault();
    setNameError(false);
    setTelError(false);
    let nameError = null;
    let telError = null;

    if (name.length > 15 || !name) {
      setNameError(true);
      nameError = true;
    }
    const number = telephone.replace(/\s/g, "");
    const isnum = /^\d+$/.test(number);
    if (number.length !== 9 || !isnum) {
      setTelError(true);
      telError = true;
    }
    if (!nameError && !telError) {
      orderProducts();
    }
  };

  return (
    <>
      {state && (
        <>
          {!isOrdered && (
            <form className={"contact-form"} onSubmit={handleProducts}>
              <label className={nameError ? "label-red" : "label"}>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder={"ваше имя"}
                />
              </label>
              <label className={telError ? "label-red" : "label"}>
                <span>+375 </span>
                <input
                  input
                  type="text"
                  onChange={(e) => setTelephone(e.target.value)}
                  value={telephone}
                  placeholder={"XX XXX XX XX"}
                />
              </label>
              <div>
                <b>к оплате {state.totalPrice}$</b>
              </div>
              <p>{message}</p>
           <button type="submit" className="button-3">
                заказать
              </button>
            </form>
          )}
          {isOrdered && (
            <>
              <h1>успешно!</h1>
              <button className="frame-btn" onClick={() => navigate("/")}>
                в магазин
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};
