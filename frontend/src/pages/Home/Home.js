import React from 'react';
import Cards from '../../Component/Cards';
import Slider from '../../Component/slider/Slider';
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
