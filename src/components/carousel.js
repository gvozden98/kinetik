import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel, Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import girl_squat from "../utils/girl_squat.jpg";
import girl_deadlift from "../utils/girl_deadlift.jpg";
import guy_lifting from "../utils/guy_lifting.webp";

const CarouselImg = () => {
  return (
    <Container style={{ marginBottom: "5", paddingBottom: "5" }}>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={girl_squat} alt="First slide" />
          <Carousel.Caption>
            <h3>Track your workouts</h3>
            <p>
              Tracking workouts is an effective way to monitor progress and
              measure improvements in strength, endurance, and overall fitness
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={girl_deadlift}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Monitor your progress</h3>
            <p>Identify areas of weakness that need more attention</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={guy_lifting} alt="Third slide" />
          <Carousel.Caption>
            <h3>Over 1000 exercises</h3>
            <p>Choose an activity and track your progress long term</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <Card className="text-center mt-3 pt-6 mb-5 pb-6">
          <Card.Body>
            <Card.Title>Start journaling today!</Card.Title>
            <Card.Text>
              Click on the button below and improve your gains
            </Card.Text>
            <Link to="/journal">
              <Button variant="primary">Lets go!</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default CarouselImg;
