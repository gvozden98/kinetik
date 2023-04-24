import React from "react";
import "./style/style.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Exercise from "./exercise";
const Library = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const [search, setSearch] = useState("");
  const [err, setErr] = useState(""); //nisi ovo iskoristio jos uvek

  const fetchExercises = async () => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/name/${search}`;
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
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      setExerciseList(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="mt-2">
      <Row>
        <Col sm={true}></Col>
        <Col sm={true}>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className={"font-link"} style={{ fontSize: "35px" }}>
                Find an exercise
              </Form.Label>
              <Form.Control
                className={"font-link"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Biceps, squat..."
              />
              {console.log(exerciseList)}
              <Button
                variant="outline-primary"
                className="mx-auto d-block font-link"
                style={{ marginTop: "10px", marginBottom: "10px" }}
                onClick={fetchExercises}>
                Search
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col sm={true}></Col>
      </Row>
      <Exercise exerciseList={exerciseList}></Exercise>
    </Container>
  );
};
export default Library;
