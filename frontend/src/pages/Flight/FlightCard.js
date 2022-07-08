import React from 'react'
import './FlightCard.css';
const FlightCard = ({FlightsInfo}) => {
  return (
    <div className='FlightCard'>
      <div className='CardBox'>
      <div className='FlightImg'>
      <img
              src={require('./img/FlightImg.jpg')}
              alt="image"
              className="src"
            />
      </div>
      <div className='FlightInfo'>
            <h4>{FlightsInfo.company}</h4>
            <h4>{FlightsInfo.id}</h4>
      </div>
      <div className='AirportInfo'>
            <div className='From'>
                  <h4>From</h4>
                  <h4>Silchar</h4>
            </div>
            <div className='To'>
                  <h4>To</h4>
                  <h4>Delhi</h4>
            </div>
      </div>
      
      <div className='FlightTiming'>
            <div className='From'>
                  <h4>21:50</h4>
                  <h4>13-07-2022</h4>
            </div>
            <div className='From'>
                  <h4>21:50</h4>
                  <h4>13-07-2022</h4>
            </div>
      </div>
      </div>
      
      </div>
    
  )
}

export default FlightCard
