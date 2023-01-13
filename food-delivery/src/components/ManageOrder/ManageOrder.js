import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { foodstore } from "../../App";
import "./ManageOrder.css";
import axios from "axios";

const ManageOrder = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { cart, setCart } = useContext(foodstore);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .put(`http://localhost:3001/cart/${product.id}`, product)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(product);
        console.log(error);
      });
  }, [product]);

  useEffect(() => {
    fetch("http://localhost:3001/cart")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [setCart, product]);

  useEffect(() => {
    let t = 0;
    cart.forEach((pro) => {
      t = t + pro.quantity * pro.price;
    });
    setTotal(t);
  }, [cart]);

  const increment = (id, name, img, description, price, quantity) => {
    const prod = {
      id: id,
      name: name,
      img: img,
      description: description,
      price: price,
      quantity: quantity + 1,
    };
    setProduct(prod);
  };

  const dicrement = (id, name, img, description, price, quantity) => {
    const prod = {
      id: id,
      name: name,
      img: img,
      description: description,
      price: price,
      quantity: quantity - 1,
    };
    if (prod.quantity <= 0) {
      axios.delete(`http://localhost:3001/cart/${id}`);
    }
    setProduct(prod);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/cart/${id}`);
    setProduct({})
  };

  const handleOrder = () => {
    navigate("/address");
  };

  return (
    <>
      <div className="manageorder">
        {cart.length ? (
          <div className="flex">
            <div className="full">
              <h1>
                From <span>Express delivery</span>
              </h1>
              <h2>Will shortly arrive after placing your order.</h2>
              <br />
              {cart.map((pd) => {
                return (
                  <div className="ordercard">
                    <div>
                      <img width="100px" src={pd.img} alt="" />
                    </div>
                    <div className="text-center">
                      <button
                        onClick={() =>
                          dicrement(
                            pd.id,
                            pd.name,
                            pd.img,
                            pd.description,
                            pd.price,
                            pd.quantity
                          )
                        }
                        className="btn"
                      >
                        -
                      </button>
                      <b>{pd.quantity}</b>
                      <button
                        onClick={() =>
                          increment(
                            pd.id,
                            pd.name,
                            pd.img,
                            pd.description,
                            pd.price,
                            pd.quantity
                          )
                        }
                        className="btn"
                      >
                        +
                      </button>

                      <br />
                      <b>{pd.price * pd.quantity}</b>
                    </div>
                    <div>
                      <button
                        className="del-btn"
                        onClick={() => handleDelete(pd.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className="total">
                <p>
                  <span>Sub total:</span> ₹{Math.round(total)}
                </p>
                <p>
                  <span>Tax(5%):</span> ₹{Math.round(total * 0.05)}
                </p>
                <p>
                  <span>Total:</span> ₹
                  {Math.round(Math.round(total * 0.05) + total)}
                </p>
                <button onClick={handleOrder} className="pl-btn">
                  PlaceOrder
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="noorder">
            <h1>your cart is empty.</h1>
            <button onClick={() => {
              navigate("/order")
            }}>Order Now</button>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageOrder;
