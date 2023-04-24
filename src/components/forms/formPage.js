import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function formPage() {
  return (
    <Form>
      <Form.Group>
        <Form.Label className={"font-link"}>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group controlId="form.Email">
        <Form.Label className={"font-link"}>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="form.Textarea">
        <Form.Label className={"font-link"}>Comment</Form.Label>
        <Form.Control as="textarea" rows={10} />
        <Container className="d-flex justify-content-center mt-3">
          <Button className={"font-link"}>Submit</Button>
        </Container>
      </Form.Group>
    </Form>
  );
}

export default formPage;
