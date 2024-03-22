/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Confetti from "../components/Confetti.js";
import "../styles/Cart.css";

function Cart({ cartItems, setCartItems }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const overlay = document.querySelector(".overlay");
  const purchasedPopup = document.querySelector(".purchased");

  const calculateTotalPrice = () => {
    let total = 0;
    for (let product of cartItems) {
      total += product.price * product.quantity;
    }
    setTotalPrice(total);
  };

  const calculateTotalItems = () => {
    let total = 0;
    for (let product of cartItems) {
      total += product.quantity;
    }
    setTotalItems(total);
  };

  const removeFromCart = (id) => {
    const updatedItems = cartItems.filter((product) => product.id !== id);
    setCartItems(updatedItems);
  };

  const quantityChange = (id, type) => {
    const updatedItems = cartItems.map((product) => {
      if (product.id === id) {
        let newQuantity =
          type === "increment" ? product.quantity + 1 : product.quantity - 1;
        if (newQuantity > 10) {
          newQuantity = 10;
        }
        if (newQuantity <= 0) {
          return null;
        } else {
          return {
            ...product,
            quantity: newQuantity,
          };
        }
      }
      return product;
    });

    setCartItems(updatedItems.filter((product) => product !== null));
  };

  const purchased = () => {
    overlay.classList.add("active");
    purchasedPopup.classList.add("active");
    Confetti();
  };

  const close = () => {
    overlay.classList.remove("active");
    purchasedPopup.classList.remove("active");
  };

  useEffect(() => {
    calculateTotalPrice();
    calculateTotalItems();
  }, [cartItems]);

  return (
    <div className="cart">
      <div className="page-header">
        <h1>Cart</h1>
        <p>Seamlessly checkout your items with ease!</p>
      </div>
      {cartItems.length > 0 ? (
        <div className="cart-body">
          <div className="cart-info">
            <h2>
              {totalItems} {totalItems === 1 ? "item" : "items"} | Total price:
              ${totalPrice.toFixed(2)}
            </h2>
          </div>
          <div className="cart-items">
            {cartItems.map((product) => (
              <div className="cart-item" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="cart-description">
                  <div className="cart-item-row">
                    <h2>{product.title}</h2>
                    <button
                      className="trash"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                  <div className="cart-item-row">
                    <p>${(product.price * product.quantity).toFixed(2)}</p>
                    <div className="quantity">
                      <button
                        value="-"
                        onClick={() => quantityChange(product.id, "decrement")}
                      >
                        -
                      </button>
                      {product.quantity}
                      <button
                        value="+"
                        onClick={() => quantityChange(product.id, "increment")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="order">
            <button className="btn cart-btn" onClick={purchased}>
              Continue to checkout <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-body">
          <div className="message">
            <h1>Your cart is empty...</h1>
            <h2>Add some items to your cart!</h2>
          </div>
        </div>
      )}
      <div className="popup">
        <div className="purchased">
          <h2>Congratulations on your purchase!</h2>
          <button className="btn" onClick={close}>
            Close
          </button>
        </div>
        <div className="overlay" onClick={close}></div>
        <div className="canvas-confetti"></div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
};

export default Cart;
