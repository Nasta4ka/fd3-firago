import React from "react";
import { useParams } from "react-router-dom";
import { Product } from "./ProductPreview";
import { ButtonsToBuy } from "./ButtonsToBuy";
import { NavLink } from "react-router-dom";
/* import { Pagination } from '../elements/Pagination' */
import { Loader } from "../elements/Loader";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Controls } from "./Controls";

export const List = () => {
  const productsCollectionRef = collection(db, "listOfProducts");
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  /*   const [currentPage, setCurrentPage] = useState('');
  const productsPerPage  = 10;
  const [currentProducts, setCurrentProducts] = useState([])
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;   */

  const cbIsChecked = (value) => {
    setIsChecked(value);
  };

  useEffect(() => {
    if (params.category) {
      setCategory(params.category);
    }
    console.log(category);
    const getProducts = async () => {
      try {
        const data = await getDocs(productsCollectionRef);
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      } catch (e) {
        alert("что-то пошло не так, попробуйте позже", e);
      }
    };
    getProducts();
  }, [params.category]);

  useEffect(() => {
    if (category === "all") {
      if (isChecked === true) {
        let arr = products.slice();
        arr.sort((a, b) => a.price - b.price);
        setFilteredProducts(arr);
      } else {
        setFilteredProducts(products);
      }
    } else {
      let arr = products.filter((product) => product.category === category);
      if (isChecked) {
        arr.sort((a, b) => a.price - b.price);
      }
      setFilteredProducts(arr);
    }
  }, [category, products, isChecked]);

  /* const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
   */

  return (
    <>
      <Controls isChecked={cbIsChecked} checked={isChecked} />
      {loading ? (
        <Loader />
      ) : (
        <div className="list-of-products">
          {filteredProducts.map((product) => {
            return (
              <NavLink
                to={`/products/${category}/${product.id}`}
                state={{ product }}
                className={"navlink"}
                key={product.id + "navlink"}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid rgba(80, 80, 80, 0.1)",
                    margin: "10px",
                  }}
                >
                  <Product product={product} key={product.id + "product" + 1} />
                  <ButtonsToBuy
                    cardData={product}
                    key={product.id + "buttonsFromPreview"}
                    id={product.id}
                  />
                </div>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};
