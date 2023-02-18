import React from "react";
import { NavLink } from "react-router-dom";

export const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul style={{ display: "flex", listStyle: "none" }}>
        {pageNumbers.map((number) => (
          <li style={{ margin: "5px" }} key={number}>
            <NavLink
              className={"navlink"}
              onClick={() => paginate(number)}
              to={"/products/" + number}
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
