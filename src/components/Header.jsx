import { Link } from "react-router-dom";
import tagSvg from "../assets/tag.svg";

function Header() {
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
      </div>
    </header>
  );
}

export default Header;
