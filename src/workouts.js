import React, { useState } from "react";
import {
  Card,
  Container,
  Form,
  Button,
  CardGroup,
  Row,
  Col,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { AccordionWorkout } from "./components/accordionWorkout";
import { FiChevronLeft } from "react-icons/fi";

export const Workouts = () => {
  const location = useLocation();
  let [exercise, setExercise] = useState();
  let [added, setAdded] = useState(false);
  let [exerciseName, setExerciseName] = useState();
  let [exerciseWeight, setExerciseWeight] = useState();
  let [exerciseReps, setExerciseReps] = useState("1");
  let [exerciseSet, setExerciseSet] = useState(1);
  let [exercises, setExercises] = useState([
    {
      exerciseName: "exerciseName",
      weightAndReps: {
        1: {
          exerciseWeight: "exerciseWeight",
          exerciseReps: "exerciseReps",
        },
      },
    },
  ]);

  let handleNameChange = (e) => {
    setExerciseName(e.target.value);
  };
  let handleWeightChange = (e) => {
    setExerciseWeight(e.target.value);
  };
  let handleRepsChange = (e) => {
    setExerciseReps(e.target.value);
  };

  let handleAddSet = () => {
    if (added === false) {
      setExercise({
        exerciseName: exerciseName,
        weightAndReps: {
          [exerciseSet]: {
            exerciseWeight: exerciseWeight,
            exerciseReps: exerciseReps,
          },
        },
      });

      setAdded(true);
      setExerciseSet(exerciseSet + 1);
      console.log(exerciseSet);
      setExercises([...exercises, exercise]);

      console.log("bdsadasd");
    } else {
      let updated = exercise;
      updated.weightAndReps[exerciseSet] = {
        exerciseWeight: exerciseWeight,
        exerciseReps: exerciseReps,
      };
      setExerciseSet(exerciseSet + 1);
      setExercise(updated);
      exercises[exercises.length - 1] = exercise; //ne znam kako drugacije da uradim ovo
    }
    console.log(exercises);
  };
  let handleNew = () => {
    setAdded(false);
    setExerciseName("");
    setExerciseReps("1");
    setExerciseWeight("");
    setExerciseSet(1);
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <Row>
        <Col sm>
          <Card className="m-2 p-2">
            <Form>
              <Form.Group>
                <Form.Label>Exercise</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter exercise name"
                  name="exerciseWeight"
                  value={exerciseName}
                  onChange={handleNameChange}
                />
              </Form.Group>
              <Container>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Weight</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="exerciseWeight"
                        value={exerciseWeight}
                        onChange={handleWeightChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Reps</Form.Label>
                      <Form.Control
                        as="select"
                        name="reps"
                        style={{ textAlign: "center" }}
                        value={exerciseReps}
                        onChange={handleRepsChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
              <Form.Group>
                <Container className="d-flex justify-content-center mt-3 mb-3">
                  <Button onClick={handleAddSet} className="m-1">
                    Add
                  </Button>
                  <Button
                    onClick={handleNew}
                    className="m-1"
                    variant="outline-secondary">
                    New
                  </Button>
                </Container>
              </Form.Group>
            </Form>
          </Card>
        </Col>
        <Col sm>
          <AccordionWorkout
            workoutName={location.state[0]}
            exercises={exercises}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Workouts;
