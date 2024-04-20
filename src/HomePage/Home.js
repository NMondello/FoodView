import React from 'react';

const images = [
  {
    src: 'hochplate.png',
    alt: "Image1's alt text",
    caption: "Image1's description"
  },
  {
    src: 'http://example.com/image2.png',
    alt: "Image2's alt text",
    caption: "Image2's description"
  },
  {
    src: 'http://example.com/image3.webp',
    alt: "Image3's alt text",
    caption: "Image3's description"
  }
];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={image.alt} />
          <div className="caption">{image.caption}</div>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <header>
        <h1>FoodView</h1>
      </header>
      <main>
        <img src="burger.png" alt="Burger" />
        <p>Welcome to FoodView! This is a work in progress of a new idea for actually seeing pictures of the food with reviews.</p>
        
        {/* Render the Gallery component */}
        <Gallery />
      </main>
    </div>
  );
};

export default Home;
