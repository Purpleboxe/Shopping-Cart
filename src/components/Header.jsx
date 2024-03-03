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
        <div className="link">
          <Link to="/">Home</Link>
        </div>
        <div className="link">
          <Link to="/shop">Shop</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
