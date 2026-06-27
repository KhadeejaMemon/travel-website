import React from 'react';
import './style.css';

// Image imports
import doubleImage from './Images/doubleimage.jpeg';
import pic1 from './Images/pic-1.jpg';
import pic2 from './Images/pic2.jpg';
import pic3 from './Images/pic3.jpg';
import pic4 from './Images/pic4.jpg';
import pic5 from './Images/pic5.jpg';

function About() {
  return (
    <div className="about-container">
      <div className="main-7">
        <div className="text-20">
          <img src={doubleImage} alt="About us" />
        </div>

        <div className="main-8">
          <h2 className="text-21">Introduction about us</h2>
          <div className="text-22">ultimate guide to</div>
          <div className="text-23"> epic adventure</div>
          {/* <div className="text-24">adventure</div> */}

          <p className="text-25">
            . . . . <i className="fa-solid fa-suitcase-rolling"></i> . . . .
          </p>

          <div className="text-26">
            <p>
             Discover breathtaking locations, hidden gems, and once-in-a-lifetime <br/>
              experiences around the world. Start your journey today with our <br/>
               expert travel insights and unforgettable itineraries <br/>
            </p>
          </div>

          <div className="main-9">
            <div className="text-27">
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </div>
            <div className="text-28">
              <h3>best price guaranteed</h3>
              <p>
                We offer unbeatable travel deals without  <br/>

                compromising on quality,
                 Book.
              </p>
            </div>
          </div>

          <div className="main-9">
            <div className="text-27">
              <i className="fa-solid fa-map"></i>
            </div>
            <div className="text-28">
              <h3>Amazing destinations</h3>
              <p>
                From tropical beaches to <br/> mountain escapes, explore top-rated,
                 destinations.
              </p>
            </div>
          </div>

          <div className="main-9">
            <div className="text-27">
              <i className="fa-solid fa-person"></i>
            </div>
            <div className="text-28">
              <h3>personal services</h3>
              <p>
                Your trip, your way. Our travel experts <br/> craft every detail based on your preferences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="main-10">
        <div className="row"></div>
        <img src={pic1} alt="pic1" />
        <img src={pic2} alt="pic2" />
        <img src={pic3} alt="pic3" />
        <img src={pic4} alt="pic4" />
        <img src={pic5} alt="pic5" />
      </div>
    </div>
  );
}

export default About;
