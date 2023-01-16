import React from "react";
import { Card } from "react-bootstrap";

const aboutCard = (props) => {
  return (
    <Card style={{ backgroundColor: "#f0f0f0",textAlign: "justify"}}>
      <Card.Body>
        <Card.Title style={{ fontSize: "30px" }}>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Card.Img variant="bottom" src={props.logo} />
      </Card.Body>
    </Card>
  );
};

export default aboutCard;
