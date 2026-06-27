import React from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <p className="text-41">journey is fun</p>
      <h1 className="text-42">travelers best choice</h1>
      <p className="text-43">
        . . . . <i className="fa-solid fa-suitcase-rolling"></i> . . . .
      </p>

      <div className="background-3">
        <div className="text-44">holiday to the oxoloten river</div>
        <div className="text-45">
          Holidays are the pause buttons of life—giving us time to breathe, laugh, <br />
          and make memories, No alarm clocks, no emails—just sunsets, good <br />
          food, and the people who make your heart full.
        </div>
        <div className="text-46">
          <button className="btn-7"> <Link to="/Packages">Book Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
