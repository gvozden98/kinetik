import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

export const AccordionWorkout = (props) => {
  console.log(props.exercises);
  //console.log("");
  return (
    <Card className="m-2 p-2">
      <Card.Title style={{ fontSize: "30px", textAlign: "center" }}>
        {props.workoutName}
      </Card.Title>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{props.exercises.exerciseName}</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>
                {props.exercises.exerciseWeight} kg x
                {props.exercises.exerciseReps}
              </ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            error!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
};
