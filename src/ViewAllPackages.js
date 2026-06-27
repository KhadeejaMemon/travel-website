import React from 'react';
import './style.css'; // Make sure your styles are in this file

function ViewAllPackages() {
  return (
    <div className="background-1">
      <div className="main-13">
        <h3 className="text-32">explore great places</h3>
        <h1 className="text-33">POPULAR PACKAGES</h1>
        <p className="text-34">
          . . . . <i className="fa-solid fa-suitcase-rolling"></i> . . . .
        </p>
      </div>

      <div className="main-14">
        <div className="text-35">
          <div className="logo">
            <i className="fa-brands fa-space-awesome"></i>
          </div>
          <div className="logo-content">
            <h3>Adventure</h3>
            <p>15 destinations</p>
          </div>
        </div>

        <div className="vel"></div>

        <div className="text-36">
          <div className="logo">
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
          <div className="logo-content">
            <h3>Trekking</h3>
            <p>12 destinations</p>
          </div>
        </div>

        <div className="vel"></div>

        <div className="text-37">
          <div className="logo">
            <i className="fa-brands fa-free-code-camp"></i>
          </div>
          <div className="logo-content">
            <h3>camp fire</h3>
            <p>7 destinations</p>
          </div>
        </div>

        <div className="vel"></div>

        <div className="text-38">
          <div className="logo">
            <i className="fa-solid fa-signs-post"></i>
          </div>
          <div className="logo-content">
            <h3>off road</h3>
            <p>15 destinations</p>
          </div>
        </div>

        <div className="vel"></div>

        <div className="text-39">
          <div className="logo">
            <i className="fa-solid fa-mountain-sun"></i>
          </div>
          <div className="logo-content">
            <h3>camping</h3>
            <p>13 destinations</p>
          </div>
        </div>

        <div className="vel"></div>

        <div className="text-40">
          <div className="logo">
            <i className="fa-solid fa-map-location-dot"></i>
          </div>
          <div className="logo-content">
            <h3>exploring</h3>
            <p>25 destinations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAllPackages;
