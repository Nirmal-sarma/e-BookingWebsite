import React from 'react'

import FlightCard from './FlightCard';
import { FlightsInfo } from "../../DB/FlighInfo";
import './FlightContainer.css';
const FlightContainer = () => {
  return (
    <div className='FlightContainer'>
      <div>
      {FlightsInfo.map((FlightInfo)=>{
        return <FlightCard  FlightsInfo={FlightInfo}/>
      })}
      </div>
    </div>
  )
}

export default FlightContainer
