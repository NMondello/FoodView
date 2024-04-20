// FoodList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewForm from './ReviewForm';

const FoodList = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/food/')
      .then(response => {
        setFoodItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching food items:', error);
      });
  }, []);

  const handleReviewSubmit = (newReview) => {
    // Update the UI to reflect the newly added review
    // You may need to reload the food items from the backend to reflect the changes
    console.log('New review added:', newReview);
  };

  return (
    <div>
      <h1>Food Items</h1>
      <ul>
        {foodItems.map(foodItem => (
          <li key={foodItem.id}>
            <img src={foodItem.imageUrl} alt={foodItem.name} />
            <h2>{foodItem.name}</h2>
            <p>{foodItem.description}</p>
            <ReviewForm foodItemId={foodItem.id} onReviewSubmit={handleReviewSubmit} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
