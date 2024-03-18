import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/Shop.css";

function Shop({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  return (
    <div className="shop">
      <div className="page-header">
        <h1>Store</h1>
        <p>Find what you need with convenience!</p>
      </div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="card-grid">
          {products.map((product) => (
            <div key={product.id} className="card" id={product.id}>
              <img
                className="card-image"
                src={product.image}
                alt={product.title}
              />
              <div className="card-body">
                <div className="card-title">{product.title}</div>
                <div className="rating">
                  Rating: <div className="rate">{product.rating.rate}</div>
                  <i>({product.rating.count})</i>
                </div>
                <div className="price">${product.price.toFixed(2)}</div>
                <div className="addToCart">
                  {cartItems.find((item) => item.id === product.id) ? (
                    <button className="btn" disabled>
                      Added to cart
                    </button>
                  ) : (
                    <button className="btn" onClick={() => addToCart(product)}>
                      Add to cart <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Shop.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
};

export default Shop;
