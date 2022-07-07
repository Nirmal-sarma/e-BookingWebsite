import React from "react";
import './Flight.css';
import FlightContainer from "./FlightContainer";
import FlightSideBar from "./FlightSideBar";
const Flight = () => {
  return (
    <div id="FlightPage">
      <div id="FlightSideBar">
      <FlightSideBar/>
      </div>
      <div id="FlightContainer">
      <FlightContainer/>
      </div>
    </div>
  )
}

export default Flight
