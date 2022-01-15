import axios from "axios";
import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Background = () => {
  const [state, setState] = useState({
    category: "",
    experience: "",
    location: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const addBackground = async (background) => {
    //TODO
  };
  return (
    <div className="container" style={{ paddingTop: "10em", width: "30%" }}>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group required as={Col} controlId="formGridCity">
            <Form.Label style={{ fontWeight: "bold" }}>Job Category</Form.Label>
            <Form.Control
              name="category"
              onChange={handleChange}
              as="select"
              defaultValue="Choose..."
            >
              <option disabled value="Choose...">
                Choose...
              </option>
              <option value="Software/IT">Software/IT</option>
              <option value="Electrical and Electronics">
                Electrical and Electronics
              </option>
              <option value="Accounting">Accounting</option>
              <option value="Education">Education</option>
              <option value="Textile and Garment">Textile and Garment</option>
              <option value="Logistics">Logistics</option>
              <option value="Shipping">Shipping</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Row className="mb-3" style={{ display: "flex" }}>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label style={{ fontWeight: "bold" }}>Location</Form.Label>
            <Form.Control
              required
              onChange={handleChange}
              name="location"
              as="select"
              defaultValue="Choose..."
            >
              <option disabled value="Choose...">
                Choose ...
              </option>
              <option value=" Ha Noi">Ha Noi</option>
              <option value="Ho Chi Minh">Ho Chi Minh</option>
              <option value="Da Nang">Da Nang</option>
              <option value=" Hue">Hue</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label style={{ fontWeight: "bold" }}>
              Experience level
            </Form.Label>
            <Form.Control
              name="jobType"
              onChange={handleChange}
              as="select"
              defaultValue="Choose..."
            >
              <option disabled value="Choose...">
                Choose...
              </option>
              <option value="graduate">Graduate</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid-Level</option>
              <option value="senior">Senior</option>
            </Form.Control>
          </Form.Group>
        </Row>
        <center>
          <Button type="submit">Submit</Button>
        </center>
      </Form>
    </div>
  );
};

export default Background;
