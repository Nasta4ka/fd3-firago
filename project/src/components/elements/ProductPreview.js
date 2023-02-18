import React from "react";
require("./productPreview.css");

export const Product = (props) => {
  return (
    <div className={"preview-wrapper"} key={props.product.id + "preview"}>
      <h4>{props.product.name}</h4>
      <img
        className={"preview-image"}
        src={props.product.link}
        alt={props.product.name}
        height={150}
        width={"auto"}
      />
    </div>
  );
};
