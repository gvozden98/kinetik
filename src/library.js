import React from "react";
import "./style/style.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import DataFetcher from "./dataFetcher";
const Library = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const fetchExercises = async () => {
    const url =
      "https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders";
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "728f36ea92msh477e8966317888bp1e397ejsnb8a8464a87c7",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setExerciseList(result);
      console.log(exerciseList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="mt-2">
      <Row>
        <Col xs={1} md={4}></Col>
        <Col xs={4} md={4}>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontSize: "35px" }}>
                Find an exercise
              </Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
              <Button
                variant="outline-primary"
                className="mx-auto d-block"
                style={{ marginTop: "10px" }}
                onClick={fetchExercises}>
                Search
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Library;
