// Price.jsx
import React from 'react';
import Pricebox from './Pricebox'; // Import the Pricebox component
import '../index.css'; // Import your CSS file for styling

// Assuming the image path is relative to the current file
import RupeeImage from '../images/Rupee.jpg'
function Price() {
  return (
    <div id='prices'>
      <h1>PRICES</h1>
      <div className="price-container">
        <Pricebox
          image={RupeeImage} 
          title="Product Title 1"
          price="3000/M"
        />

<Pricebox
          image={RupeeImage}
          title="Product Title 2"
          price="6000/M"
        />

        <Pricebox
          image={RupeeImage}
          title="Product Title 3"
          price="10000/M"
        />

        {/* Repeat for other Pricebox components */}
      </div>
    </div>
  );
}

export default Price;