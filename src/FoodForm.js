// FoodForm.js
import React, { useState } from 'react';
import axios from 'axios';

const FoodForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFoodItem = { name, description, imageUrl };
    axios.post('http://localhost:8080/api/food/', newFoodItem)
      .then(response => {
        console.log('Food item added:', response.data);
        // Optionally, you can show a success message or reset the form fields here
      })
      .catch(error => {
        console.error('Error adding food item:', error);
        // Optionally, you can show an error message here
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={e => setDescription(e.target.value)} required />
      </label>
      <label>
        Image URL:
        <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} required />
      </label>
      <button type="submit">Add Food Item</button>
    </form>
  );
};

export default FoodForm;
