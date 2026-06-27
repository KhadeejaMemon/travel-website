import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

const Form = () => {
  const [formData, setFormData] = useState({
    destination: '',
    people: '',
    checkin: '',
    checkout: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { destination, people, checkin, checkout } = formData;
    if (!destination || !people || !checkin || !checkout) {
      alert("Please fill out all required fields.");
      return;
    }

    navigate('/bookinginfo', { state: { booking: formData } });
  };

  return (
    <div className="text-12">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Booking Form</h2>

        <label htmlFor="destination" className="name">Destination*</label><br />
        <input
          type="text"
          id="destination"
          name="destination"
          placeholder="Enter destination"
          value={formData.destination}
          onChange={handleChange}
          className="box"
        />
        <br />

        <label htmlFor="people" className="name">Number of People*</label><br />
        <input
          type="number"
          id="people"
          name="people"
          placeholder="No: of people"
          value={formData.people}
          onChange={handleChange}
          className="box"
        />
        <br />

        <label htmlFor="checkin" className="name">Check-in Date*</label><br />
        <input
          type="date"
          id="checkin"
          name="checkin"
          value={formData.checkin}
          onChange={handleChange}
          className="box"
        />
        <br />

        <label htmlFor="checkout" className="name">Check-out Date*</label><br />
        <input
          type="date"
          id="checkout"
          name="checkout"
          value={formData.checkout}
          onChange={handleChange}
          className="box"
        />
        <br />

        <input type="submit" value="Book Now" className="btn-2" />
      </form>
    </div>
  );
};

export default Form;
