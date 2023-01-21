import React from "react";
import "./style/style.css";
import { Container, Row, Col } from "react-bootstrap";
import JournalImg from "./utils/journalImg.jpg";
import CreateDay from "./components/forms/createDay";
const Journal = () => {
  return (
    <Container className="mt-2">
      <Row>
        <Col sm>
          <CreateDay />
        </Col>
        <Col sm>
          <img src={JournalImg} alt="shaking hands" style={{ width: "100%" }} />
        </Col>
      </Row>
    </Container>
  );
};
export default Journal;
