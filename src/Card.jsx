import React from "react";
import "./Card.css";

const Card = ({ name, price, comment, Description, img, link }) => {
  const btn = () => {
    window.open(link);
  };

  return (
    <div className="container">
      <div className="card-img">
        <img 
        src={img} 
        alt={name} 
        />
      </div>

      <div className="card-content">
        <h2>{name}</h2>
        <p>{Description}</p>
        <h3>{price}</h3>
        <p>{comment}</p>
        <button onClick={btn}>Add To Cart </button>
      </div>
    </div>
  );
}

export default Card;