import React, { Fragment } from "react";
import "./ProductList.css";

export const ProductList = ({ id, name, image }) => {
  return (
    <Fragment>
      <img src={image} alt={name} />
      <span>{name}</span>
    </Fragment>
  );
};
