import React from 'react';
import Cards from '../../Cards';
import Slider from '../../slider/Slider';
import './Home.css';
const Home = () => {
  return (
    <div id="HomePage">
      {/* This is Home page */}
      <Cards />
      <Slider />
    </div>
  );
};

export default Home;
