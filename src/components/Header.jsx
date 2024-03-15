import { Link } from "react-router-dom";
import tagSvg from "../assets/tag.svg";
import cartSvg from "../assets/cart.svg";
import PropTypes from "prop-types";

function Header({ cartItems }) {
  return (
    <header>
      <div className="headerIcon">
        <Link to="/">
          <h1>
            <img src={tagSvg} alt="tag" />
            ParodyMart
          </h1>
        </Link>
      </div>
      <div className="headerLinks">
        <Link to="/">
          <div className="link">Home</div>
        </Link>
        <Link to="/shop">
          <div className="link">Shop</div>
        </Link>
        <Link to="/cart">
          <div className="link">
            {cartItems.length > 0 && (
              <div className="cart-count">{cartItems.length}</div>
            )}
            <img src={cartSvg} alt="cart" />
          </div>
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Header;
