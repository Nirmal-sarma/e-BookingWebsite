import React from 'react';
import './FormContainer.css';
import { Form, Button } from 'react-bootstrap';

const FormComponent = () => {
  return (
    <>
      <div className="formDiv">
        <Form className="formClass1">
          <h2 className="text1">Register</h2>
          <hr />
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="formClass2">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label className="formClass2">Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formClass2">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="formClass2">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default FormComponent;
