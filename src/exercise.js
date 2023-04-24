import React from "react";
import { Card, Row, Col } from "react-bootstrap";
export default function Iterate(props) {
  console.log(props.exerciseList);
  let listItems = []; //napravi listu
  for (let i = 0; i < props.exerciseList.length; i += 3) { //povecavaj brojac za 3 i svakom trecem dodaj red
    listItems.push(
      <Row>
        {props.exerciseList.slice(i, i + 3).map((exercise) => ( //svakom dodaj karticu
          <Col sm={true} key={exercise?.id}>
            <Card
              style={{
                backgroundColor: "#f0f0f0",
                textAlign: "justify",
                margin: "10px",
              }}>
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>
                  {exercise?.name}
                </Card.Title>
                {/* <Card.Text>{props.text}</Card.Text> */}
                <Card.Img variant="bottom" src={exercise?.gifUrl} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
  return listItems;
}
