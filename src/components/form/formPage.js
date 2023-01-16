import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function formPage() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group controlId="form.Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="form.Textarea">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={10} />
        <Container className="d-flex justify-content-center mt-3">
          <Button>Submit</Button>
        </Container>
      </Form.Group>
    </Form>
  );
}

export default formPage;
