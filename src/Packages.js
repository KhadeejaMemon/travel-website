import React from 'react';
import './style.css'; // Link your CSS
import { Link } from 'react-router-dom';

// Import images from your Images folder
import tour1 from './Images/tour1.jpg';
import tour2 from './Images/tour2.jpg';
import tour3 from './Images/tour3.jpg';
import tour4 from './Images/tour4.jpg';

function Packages() {
  return (
    <>
      {/* Title Section */}
      <div className="main-11">
        <h3 className="text-29">explore great places</h3>
        <h1 className="text-30">POPULAR PACKAGES</h1>
        <p className="text-31">
          . . . . <i className="fa-solid fa-suitcase-rolling"></i> . . . .
        </p>
      </div>

      {/* Cards Section */}
      <div className="container">
        <div className="card mb-4">
          <img src={tour1} alt="tour1" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Mountain Adventure</h5>
            <p className="card-text">Explore the high peaks and stunning views.</p>
            <p className="price">$499</p>
            <a href="#" className="btn btn-primary">Book Now</a>
          </div>
        </div>

        <div className="card mb-4">
          <img src={tour2} alt="tour2" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">SUNSET VIEW OF LAKE</h5>
            <p className="card-text">Explore the GROGERIOUS SUNSETS</p>
            <p className="price">$499</p>
            <a href="#" className="btn btn-primary">Book Now</a>
          </div>
        </div>

        <div className="card mb-4">
          <img src={tour3} alt="tour3" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">VARIOUS BEACHES</h5>
            <p className="card-text">Explore the views of beaches of world</p>
            <p className="price">$499</p>
            <a href="#" className="btn btn-primary">Book Now</a>
          </div>
        </div>

        <div className="card mb-4">
          <img src={tour4} alt="tour4" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">EXPERIENCES OF ISLAND</h5>
            <p className="card-text">Explore the beauty of countries.</p>
            <p className="price">$499</p>
            <a href="#" className="btn btn-primary">Book Now</a>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="main-12">
        <button className="btn-6"><Link to="/ViewAllPackages"> View All Packages</Link></button>
      </div>
    </>
  );
}

export default Packages;
