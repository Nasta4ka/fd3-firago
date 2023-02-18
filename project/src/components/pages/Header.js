import { Navbar } from "../elements/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
require("./header.css");

export const Header = () => {
  const num = useSelector((state) => state.cart.numberOfItems);

  return (
    <header style={{ backgroundColor: "rgba(232, 236, 241,0.9g)", position: 'fixed', top: '0'}}>
      <div className="container">
        <Navbar />
        <NavLink className={"cart-icon"} to="/cart">
          <FaShoppingCart className="cart-icon-img" />
          <span>&nbsp;{num}</span>{" "}
        </NavLink>
      </div>
    </header>
  );
};
