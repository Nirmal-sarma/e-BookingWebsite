import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <>
      <div className="container">
        <div className="card-container">
          <figure className="first com">
            <img
              src="https://promos.makemytrip.com/Hotels_product/Luxe/brands.png"
              alt="image"
              className="src"
            />
            <center><b>Luxe properties in India</b></center>
          </figure>
          <figure className="second com">
            <button className="btn btn-light">Book Now</button>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Cards;
