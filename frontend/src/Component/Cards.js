import React from 'react';
import './Cards.css';

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
<<<<<<< HEAD
            <center>
              <button className="btn btn-danger">Click here</button>
            </center>
=======
          <div className="bottompart">
          <div className="description"><h2><b>Luxe properties in India</b></h2></div>
          <div><h3>Explore by luxury Brands,theme & picks</h3></div>
          </div>
>>>>>>> a8d51268b2eab65747bfd59d2fa2824f46a967d4
          </figure>
          <figure className="second com">
          <button type="button" class="btn btn-primary btn-lg center">Book Now</button>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Cards;
