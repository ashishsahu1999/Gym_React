// Pricebox.jsx
import React from 'react';
import '../index.css'; // Import your CSS file for styling

function Pricebox(props) {
  return (
    <div className='price-box'>
      <div className='price-img'>
        <img src={props.image} alt={props.title} />
        <h1 className='price'>{props.price}</h1>
      </div>
      <div className='price-text'>
        <h2 className='title'>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <button className='Button'>Buy</button>
      </div>
    </div>
  );
}

export default Pricebox;
