import "../styles/Home.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <h1>Shop at ParodyMart - Not a real shopping website!</h1>
      <div className="description">
        Welcome to ParodyMart - a fake shopping website made to make you
        contemplate reality. We serve everything from junk to more utterly
        pointless junk! Shop with us now to discover more about these useless
        knick-knacks.
      </div>
      <Link to="/shop">
        <button className="btn">
          Start shopping <i className="fa-solid fa-arrow-right"></i>
        </button>
      </Link>
    </section>
  );
}

export default Home;
