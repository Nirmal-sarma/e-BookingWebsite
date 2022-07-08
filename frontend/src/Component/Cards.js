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
            <center>
              <button className="btn btn-danger">Click here</button>
            </center>
          </figure>
          <figure className="second com">
            <div className="secondpara">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipisicing elit.
              <br />
              Excepturi recusandae fugit non
              <br />
              quisquam iste minima fugiat,
              <br />
              cum minus velit facere?
              <br />
              <button>Book Now</button>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Cards;
