/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "../styles/Cart.css";

function Cart({ cartItems }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let total = 0;
    for (let item of cartItems) {
      total += item.price * item.quantity;
    }
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  return (
    <div className="cart">
      <div className="page-header">
        <h1>Cart</h1>
        <p>Seamlessly checkout your items with ease!</p>
      </div>
      {cartItems.length > 0 ? (
        <div className="cart-body">
          <h2>
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
          </h2>
          <h3>Total price: ${totalPrice.toFixed(2)}</h3>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-left">
                  <h2>{item.title}</h2>
                </div>
                <div className="cart-item-right">
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="message">
          <h1>Your cart is empty...</h1>
          <h2>Add some items to your cart!</h2>
        </div>
      )}
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Cart;
