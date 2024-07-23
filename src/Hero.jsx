import React from "react";
import './Hero.css'

function Hero() {
  return (
    <div
      className="Hero"
      style={{
        backgroundImage: "url(/assest/egusi.jpg)"
      }}
    >
      <div className="welcome">
        <h1>WELCOME TO IYAN PALACE</h1>
        <p>Your satisfaction with local pounded yam is our Desire</p>
        <button>Order Now</button>

        
      </div>
    </div>
  );
}

export default Hero;
