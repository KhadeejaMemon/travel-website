import React from 'react';
import './style.css';
import img1 from './Images/tra-1.jpg';
import img2 from './Images/tra-2.jpg';

// Sub-component for individual destination card
const DestinationCard = ({ image, title, location }) => (
  <div className="card"> {/* Match the original HTML */}
    <img src={image} alt={title} />
    <div className="card-content">
      <h2>{title}</h2>
      <h3>{location}</h3>
    </div>
  </div>
);


// Main Tour component
const Tour = () => {
  const destinations = [
    {
      image: img1,
      title: 'Marina Ridge',
      location: 'New Zealand',
    },
    {
      image: img2,
      title: 'Tibet Peak',
      location: 'Tibet',
    },
    {
      image: img1,
      title: 'Santorini Island',
      location: 'Greece',
    },
    {
      image: img2,
      title: 'Arctic Desert',
      location: 'Norway',
    },
  ];

  return (
    <div>
      <h3 className="text-17">Popular Destination</h3>
      <h1 className="text-18">Top Notch Destination</h1>
      <p className="text-19">
        . . . . <i className="fa-solid fa-suitcase-rolling"></i> . . . .
      </p>

      <div className="main-5">
        {destinations.map((dest, index) => (
          <DestinationCard
            key={index}
            image={dest.image}
            title={dest.title}
            location={dest.location}
          />
        ))}
      </div>

      
    </div>
  );
};

export default Tour;

    