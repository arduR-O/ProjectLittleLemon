import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
// import './ConfirmedBooking.css';

const ConfirmedBooking = () => {
  return (
    <div className="confirmed-booking">
      <FaCheckCircle className="confirmed-booking-icon" />
      <h1 className="confirmed-booking-text">Booking Confirmed!</h1>
    </div>
  );
};

export default ConfirmedBooking;
