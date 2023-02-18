import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <NavLink className={"navlink"} to="/">
        Home
      </NavLink>
      <NavLink className={"navlink"} to="/products">
        Products
      </NavLink>
    </div>
  );
};
