

import React from "react";
import "./style.css"; 
// import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
 
      <div className="background-5">
        <div className="promo-container">
          <div className="promo-left">
            <h5>TRAVEL OFFER & DISCOUNT</h5>
            <h2>HOLIDAY SPECIAL 25% OFF!</h2>
            <p>
              Sign up now to receive hot special offers and information about
              the best tour packages, updates, and discounts!
            </p>

            <form className="signup-form">
              <input
                type="email"
                placeholder="Your Email Address"
                required
              />
              <input type="submit" value="SIGN UP NOW!" />
            </form>

            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Circle Stats */}
          <div className="circle-container">
            <div className="circle-box">
              <div className="circle">
                <span>85%</span>
              </div>
              <p>Satisfied Clients</p>
            </div>
            <div className="circle-box">
              <div className="circle">
                <span>75%</span>
              </div>
              <p>Resonable price</p>
            </div>
            <div className="circle-box">
              <div className="circle">
                <span>70%</span>
              </div>
              <p>Best destination</p>
            </div>
            <div className="circle-box">
              <div className="circle">
                <span>90%</span>
              </div>
              <p>Positive reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="background-6">
        <div className="main-17">
          <h1 className="text-47">JOIN US FOR MORE UPDATE!!!</h1>
          <p className="text-48">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            ducimus ut aperiam nisi non eveniet rem quas. Esse, beatae.
            Mollitia ducimus totam possimus ullam, porro facere nemo eius.
            Eligendi, impedit.
          </p>
          <div className="button-2">
            <button className="btn-7">learn more</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <h2>User Reviews</h2>
        <div className="reviews">
          <div className="review">
            <p>"Amazing service and super fast delivery!"</p>
            <span className="user">- Alex R.</span>
          </div>
          <div className="review">
            <p>
              "The quality is top-notch. I highly recommend it to everyone."
            </p>
            <span className="user">- Maria L.</span>
          </div>
          <div className="review">
            <p>"Customer support was very helpful and friendly."</p>
            <span className="user">- James W.</span>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; 2025 travel.com. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
