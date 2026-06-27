import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

// function HandleEvent(event) {
//   event.preventDefault();
//   alert("Your form is submitted successfully");
// }

function Home() {
  return (
    <div className="main">
      <div className="main-1">
        <div className="text-1">
          <a href="#">
            <i className="fa-solid fa-phone"></i> +01(8765)87654
          </a>
        </div>
        <div className="text-2">
          <a href="#">
            <i className="fa-solid fa-envelope"></i> company@email.com
          </a>
        </div>
        <div className="text-3">
          <a href="#">
            <i className="fa-solid fa-location-dot"></i> 3146 Koontz Lane, California
          </a>
        </div>
        <div className="text-4">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
        <div className="text-5">
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="text-6">
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="text-7">
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="vl"></div>
        <div className="text-8">
          <a href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
        <div className="vl"></div>
      </div>

      <hr />

      <div className="main-2">
        <div className="text-9">
          <a href="#"> <i className="fa-solid fa-ship"></i> Travele </a>
        </div>
        <div className="text-10">
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/tour">Tour</Link>
            <Link to="/about">About</Link>
            <Link to="/packages">Packages</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/Dashboard">Dashboard</Link>
            <button className="btn-1">
              <Link to="/login">Log In</Link>
            </button>
            <button className="btn-9">
              <Link to="/form">apply now</Link>
            </button>
          </nav>
        </div>
      </div>

      <div className="main-3">
        <div className="text-11">
          <h3>EXPLORE. DISCOVER. TRAVEL</h3>
          <div className="text-13">journey to</div>
          <div className="text-14">explore nature</div>
          <div className="text-15">
            . . . . <i className="fa-solid fa-suitcase-rolling"></i> . . . .
          </div>
          <div className="text-16">
            Travel isn’t always about the destination — it’s about the
            journey, the people <br />
            you meet, the cultures you immerse yourself in, and the countless
            memories you <br />
            along the way that shape who you become.
          </div>

          <div className="main-4">
            <button className="btn-3">
              <Link to="/About">read more</Link>
            </button>
            <button className="btn-4">
              <Link to="/Packages">Book Now</Link>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
