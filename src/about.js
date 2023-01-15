import React from "react";
import AboutCard from "./components/aboutCard";
import { Container, CardGroup } from "react-bootstrap";

function about() {
  return (
    <>
      <Container>
        <CardGroup>
          <AboutCard />
        </CardGroup>
      </Container>
    </>
  );
}

export default about;
