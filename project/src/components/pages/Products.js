import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <>
      <nav className="categories-nav">
        <NavLink className={"category-link"} to="/products/all">
          всё
        </NavLink>
        <NavLink className={"category-link"} to="/products/mats">
          коврики
        </NavLink>
        <NavLink className={"category-link"} to="/products/clothes">
          одежда
        </NavLink>
        <NavLink className={"category-link"} to="/products/props">
          пропсы
        </NavLink>
        <NavLink className={"category-link"} to="/products/extra">
          аксессуары
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
