import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function CreateDay() {
  const navigate = useNavigate(); //proveri kako se tacno ovo koristi
  let [workoutName, setWorkoutName] = useState();
  let [workoutDate, setWorkoutDate] = useState();
  let [workoutComment, setWorkoutComment] = useState();
  let handleSubmit = (event) => {
    navigate("/journal/workouts", {
      state: { workoutName, workoutDate, workoutComment },
    });
  };

  let handleWorkoutNameChange = (e) => {
    setWorkoutName(e.target.value);
    console.log(e.target.value);
  };
  let handleWorkoutDateChange = (e) => {
    setWorkoutDate(e.target.value);
    console.log(e.target.value);
  };
  let handleWorkoutComment = (e) => {
    setWorkoutComment(e.target.value);
    console.log(e.target.value);
  };
  return (
    <Form method="post" action="/journal">
      <Form.Group>
        <Form.Label>Workout Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter workout name"
          name="workoutName"
          value={workoutName}
          onChange={handleWorkoutNameChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="workoutDate"
          onChange={handleWorkoutDateChange}
        />
      </Form.Group>
      <Form.Group controlId="form.Textarea">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          name="workoutComment"
          value={workoutComment}
          onChange={handleWorkoutComment}
        />
        <Container className="d-flex justify-content-center mt-3 mb-3">
          <Button onClick={handleSubmit}>Submit</Button>
        </Container>
      </Form.Group>
    </Form>
  );
}

export default CreateDay;
