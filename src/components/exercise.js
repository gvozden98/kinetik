import React from "react";
import { Card, Row, Col, Alert } from "react-bootstrap";

export default function Exercise(props) {
  if (props.exerciseList?.length === 0) {
    return (
      <Alert variant="danger">
        <Alert.Heading>Input invalid</Alert.Heading>
      </Alert>
    );
  }
  let listItems = []; //kreiraj niz
  for (let i = 0; i < props.exerciseList?.length; i += 3) {
    //pomeraj na svaki treci element
    listItems.push(
      //ubaci u niz
      <Row key={i}>
        {props.exerciseList.slice(i, i + 3).map(
          (
            exercise //dodaj red pa uzmi 3 elementa
          ) => (
            <Col sm={true} key={exercise?.id}>
              {" "}
              {/* dodaj kolonu */}
              <Card
                style={{
                  backgroundColor: "#f0f0f0",
                  textAlign: "justify",
                  margin: "10px",
                }}>
                {/* dodaj karticu */}
                <Card.Body>
                  <Card.Title
                    className={"font-link"}
                    style={{ fontSize: "17px" }}>
                    {exercise?.name}
                  </Card.Title>
                  <Card.Img variant="bottom" src={exercise?.gifUrl} />
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
    );
  }
  return listItems;
}
