// ReviewForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ foodItemId }) => {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = { foodItemId, rating, comment };
    axios.post('http://localhost:8080/api/review/', newReview)
      .then(response => {
        console.log('Review added:', response.data);
        // Optionally, you can show a success message or reset the form fields here
      })
      .catch(error => {
        console.error('Error adding review:', error);
        // Optionally, you can show an error message here
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating:
        <input type="number" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} required />
      </label>
      <label>
        Comment:
        <textarea value={comment} onChange={e => setComment(e.target.value)} required />
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
