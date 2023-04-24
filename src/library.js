import React from "react";
import "./style/style.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Library = () => {
  return (
    <Container className="mt-2">
      {/* <Row>
        <Col sm>
          {" "} */}

      <Row>
        <Col xs={1} md={4}></Col>
        <Col xs={4} md={4}>
          {" "}
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontSize: "35px" }}>
                Find an exercise
              </Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
              <Button
                variant="outline-primary"
                className="mx-auto d-block"
                style={{ marginTop: "10px" }}>
                Search
              </Button>{" "}
            </Form.Group>
          </Form>
        </Col>
        <Col xs={1} md={4}></Col>
      </Row>

      {/* </Col>
        <Col sm></Col>
      </Row> */}
    </Container>
  );
};
export default Library;
