import React from "react";
import Form from "./components/form/formPage";
import { Container, Row, Col } from "react-bootstrap";
import ShakeImg from "./utils/pngfind.com-handshake-png-994473.png";
function contact() {
  return (
    <Container className="mt-2">
      <Row>
        <Col sm>
          <Form />
        </Col>
        <Col sm>
          <img src={ShakeImg} alt="shaking hands" style={{ width: "100%" }} />
        </Col>
      </Row>
    </Container>
  );
}

export default contact;
