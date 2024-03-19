import "../styles/Home.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home">
        <div className="intro">
          <h1>Shop at ParodyMart - Not a real shopping website!</h1>
          <div className="description">
            Welcome to ParodyMart - a fake shopping website made to make you
            contemplate reality. We serve everything from junk to more utterly
            pointless junk! Shop with us now to discover more about these
            useless knick-knacks.
          </div>
          <Link to="/Shopping-Cart/shop" className="btn">
            Start shopping <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <div className="promotion">
          <h1>Save now this Black Friday!</h1>
          <p>50% off on all the items you love!</p>
        </div>

        <div className="reviews">
          <div className="reviews-header">
            <h2>Happy Customers</h2>
            Here is what some of our customers thought about ParodyMart.
          </div>
          <div className="review-list">
            <div className="review-item">
              <p className="customer-name">John Doe</p>
              <p className="review-text">
                {'"'}ParodyMart is the best! I never knew I needed a Pet Rock
                until I found it here. It has given me peace and prosperity.
                ParodyMart has single handedly became my favorite place to shop!
                {'"'}
              </p>
            </div>
            <div className="review-item">
              <p className="customer-name">Robber</p>
              <p className="review-text">
                {'"'}I smuggled some goods from this fine establishment.
                ParodyMart is a real steal if you know what I mean. The cops are
                still out for me, I give ParodyMart a 10 out of 10!{'"'}
              </p>
            </div>
            <div className="review-item">
              <p className="customer-name">Jane Doe</p>
              <p className="review-text">
                {'"'}My husband John Doe got a dumb Pet Rock from this place. I
                can not believe he would go this far! I decided to get one of my
                own and I am quite satisfied. I give ParodyMart a rock-solid
                10/10! {'"'}
              </p>
            </div>
          </div>
        </div>

        <div className="about-us">
          <h2>About Us</h2>
          <p>
            ParodyMart is a project made to replicate a fake store. Nothing here
            is real except for the greatness it holds in our hearts.
          </p>
          <button className="btn">Learn More</button>
        </div>

        <div className="newsletter">
          <p>Get the latest and best offers.</p>
          <input type="email" placeholder="Email Address" />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
