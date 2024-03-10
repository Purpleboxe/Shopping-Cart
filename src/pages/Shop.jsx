import { useEffect, useState } from "react";

import "../styles/Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        console.log(json);
      });
  }, []);

  return (
    <div className="shop">
      <div className="shop-header">
        <h1>Store</h1>
        <p>Find what you need with convenience!</p>
      </div>
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
              <div className="price">${product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
