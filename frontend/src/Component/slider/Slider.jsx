import React from 'react';
import Text from './Text';
import p1 from '../assets/Images/taj.jpg';
import p2 from '../assets/Images/God.jpg';
import p3 from '../assets/Images/Mumbai.jpg';
import p4 from '../assets/Images/mysorepalace.jpg';
import p5 from '../assets/Images/jaisalmer.jpg';
import { Card } from 'react-bootstrap';

function Slider() {
  var fontSize = 1.5 + 'rem';
  var style1 = {
    fontSize: { fontSize },
  };
  return (
    <>
      <div className="slider">
        <Text />
        <div className="photos">
          <div className="photos-item">
            <Card style={{ width: '20rem' }}>
              <img src={p1} style={{ height: '15rem' }} />
              <Card.Body>
                <Card.Title>
                  <p className="item-heading">The Taj Mahal, Agra (UP)</p>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="photos-item">
            <Card style={{ width: '20rem' }}>
              <img src={p2} style={{ height: '15rem' }} />
              <Card.Body>
                <Card.Title>
                  <p className="item-heading">The Beaches of Goa, Goa</p>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="photos-item">
            <Card style={{ width: '20rem' }}>
              <img src={p3} style={{ height: '15rem' }} />
              <Card.Body>
                <Card.Title>
                  <p className="item-heading">Mumbai: The Gateway of India</p>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="photos-item">
            <Card style={{ width: '20rem' }}>
              <img src={p4} style={{ height: '15rem' }} />
              <Card.Body>
                <Card.Title>
                  <p className="item-heading">Mysore Palace, Karnataka</p>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div className="photos-item">
            <Card style={{ width: '20rem' }}>
              <img src={p5} style={{ height: '15rem' }} />
              <Card.Body>
                <Card.Title>
                  <p className="item-heading">The Golden City : Jaisalmer</p>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
