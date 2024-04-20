// App.js
import React from 'react';
import FoodList from './FoodList';
import FoodForm from './FoodForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FoodView</h1>
      </header>
      <main>
        <FoodForm />
        <FoodList />
      </main>
    </div>
  );
}

export default App;
