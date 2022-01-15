import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../app.properties";

const CreatePost = () => {
  const [job, setJob] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    addJob();
  };
  const addJob = async () => {
    const payload = {
      title: job,
      location: "Ho Chi Minh",

      salaryRangeMin: 8000000,
      salaryRangeMax: 13000000,
    };
    await axios
      .post(API_URL + "jobs", payload)
      .then((res) => navigate("/dashboard/employer"))
      .catch((err) => console.log(err.response.data));
  };
  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            placeholder="name@example.com"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Job Description:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default CreatePost;
