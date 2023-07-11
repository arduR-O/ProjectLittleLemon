import React, { useState, useEffect } from "react";
import { submitAPI } from "./api"; // Make sure to provide the correct path to the API file
import { useHistory} from "react-router-dom";

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const history = useHistory();
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const validateForm = () => {
    const isDateValid = date !== "";
    const isGuestsValid = guests >= 1 && guests <= 10;
    const isOccasionValid = occasion !== "";

    setFormValid(isDateValid && isGuestsValid && isOccasionValid);
  };

  useEffect(() => {
    validateForm();
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      const formData = {
        date,
        time,
        guests,
        occasion,
      };

      // Call the submitAPI function to submit the form data
      submitAPI(formData)
        .then((response) => {
          // Handle the response from the API, e.g., show success message, navigate to confirmation page, etc.
          setIsBookingConfirmed(response);
        })
        .catch((error) => {
          // Handle any error that occurred during form submission
          console.error(error);
        });

      if (isBookingConfirmed) {
        // Navigate to the booking confirmation page
        // useNavigate('/booking-confirmed');
        history.push("/booking-confirmed");
      }
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Prepare the form data to be submitted
  //   const formData = {
  //     date,
  //     time,
  //     guests,
  //     occasion,
  //   };

  //   // Call the submitAPI function to submit the form data
  //   submitAPI(formData)
  //     .then((response) => {
  //       // Handle the response from the API, e.g., show success message, navigate to confirmation page, etc.
  //       setIsBookingConfirmed(response);
  //     })
  //     .catch((error) => {
  //       // Handle any error that occurred during form submission
  //       console.error(error);
  //     });

  //     if (isBookingConfirmed) {
  //       // Navigate to the booking confirmation page
  //       // useNavigate('/booking-confirmed');
  //       history.push('/booking-confirmed');
  //     }
  // };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          updateTimes(date);
        }}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value, 10))}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!formValid}
        aria-label="On Click"
      />
    </form>
  );
};

export default BookingForm;
