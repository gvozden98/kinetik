import React from "react";
import { Card } from "react-bootstrap";

const aboutCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Welcome</Card.Title>
        <Card.Text>
          Welcome to our website! We are dedicated to helping individuals like
          you track and improve their workouts. Our mission is to provide a
          comprehensive and user-friendly platform that allows users to easily
          document their exercise routine and monitor their progress over time.
          Our website features a wide range of tools and resources to help you
          achieve your fitness goals, including a customizable workout journal,
          a detailed exercise database, and progress tracking charts. We also
          offer a community feature where users can share their progress, get
          feedback and connect with other fitness enthusiasts. We believe that
          tracking your workouts is a powerful way to take control of your
          fitness journey and make real progress. Whether you're a beginner just
          starting out or a seasoned athlete looking to take your training to
          the next level, our website is the perfect tool for you. Our team is
          made up of fitness enthusiasts and experts who are passionate about
          helping people achieve their fitness goals. We are constantly working
          to improve our platform and add new features to make tracking your
          workouts as easy and effective as possible. Thank you for choosing our
          website and we hope you find it helpful in your fitness journey.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default aboutCard;
