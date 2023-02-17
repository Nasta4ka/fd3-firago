import React, { Fragment } from "react";
import { db } from "../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../redux/cartSlice";
require("./buttonsToBuy.css");

export const ButtonsToBuy = (props) => {
  const docRef = doc(db, "listOfProducts", props.id);
  const dispatch = useDispatch();
  const [numberOfItems, setNumberOfItems] = useState(1);
  const [error, setError] = useState(false);
  const [rest, setRest] = useState(0);

  useEffect(() => {
    setRest(props.cardData.rest);
  }, [props.cardData]);

  const decreaseNumberOfItems = (e) => {
    setError(false);
    e.preventDefault();
    if (numberOfItems > 1) setNumberOfItems(numberOfItems - 1);
  };
  const increaseNumberOfItems = (e) => {
    e.preventDefault();
    if (props.cardData.rest) {
      if (numberOfItems < rest) setNumberOfItems(numberOfItems + 1);
      if (numberOfItems === rest) setError(true);
    } else {
      setNumberOfItems(numberOfItems + 1);
    }
  };

  const updateData = async () => {
    setRest(rest - numberOfItems);
    let num = rest - numberOfItems;

    try {
      await updateDoc(docRef, {
        rest: num,
      });
    } catch (e) {
      console.log("не вносятся изменения на сервер");
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    dispatch(addToCart([props.cardData, numberOfItems, props.id]));
    updateData();
  };

  const controlInput = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <>
        {rest > 0 && (
          <div className="product-price">
            <span>
              <b>{props.cardData.price}$</b>
            </span>
            <button className="button-3" onClick={addProduct}>
              добавить в корзину
            </button>
            <div className="price-controls">
              <button onClick={decreaseNumberOfItems}>-</button>
              <input value={numberOfItems} readOnly onClick={controlInput} />
              <button onClick={increaseNumberOfItems}>+</button>
            </div>
            {error && <span>Доступно: {rest}шт</span>}
          </div>
        )}
      </>
      {rest === 0 && (
        <h3 style={{ whidth: "100%", textAlign: "center", color: "red" }}>
          товар закончился
        </h3>
      )}
    </Fragment>
  );
};
