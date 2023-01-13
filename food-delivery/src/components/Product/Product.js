import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {

  return (
    <div>
      <Link to="/order">
        <div className="card">
          <img className="image" src={props.product.img} alt="food" />
          <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.description}</p>
            <div className="flex">
              {props.children}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
