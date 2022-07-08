import React from 'react';
import Text from './Text';
import p1 from '../assets/Images/taj.jpg';
import p2 from '../assets/Images/God.jpg';
import p3 from '../assets/Images/Mumbai.jpg';
import p4 from '../assets/Images/mysorepalace.jpg';
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
                  <p className="item-heading">The Taj Mahal</p>
                </Card.Title>
                <Card.Text style={style1}> Agra</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="photos-item">
            <Card style={{ width: '20rem' }}>
              <img src={p2} style={{ height: '15rem' }} />
              <Card.Body>
                <Card.Title>
                  <p className="item-heading">The Beaches of Goa</p>
                </Card.Title>
                <Card.Text style={style1}> Goa</Card.Text>
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
                <Card.Text style={style1}> </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="photos-item">
            <Card style={{ width: '20rem' }}>
              <img src={p4} style={{ height: '15rem' }} />
              <Card.Body>
                <Card.Title>
                  <p className="item-heading">Mysore Palace</p>
                </Card.Title>
                <Card.Text style={style1}> Mysore, karnataka</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
