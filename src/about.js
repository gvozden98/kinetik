import React from "react";
import AboutCard from "./components/aboutCard";
import { Container, CardGroup } from "react-bootstrap";
import logo from "./utils/kineti_logo.png";

let aboutTextLong = `Welcome to our website! We are dedicated to helping individuals like you track and improve their workouts. Our mission is to provide a comprehensive and user-friendly platform that allows users to easily document their exercise routine and monitor their progress over time.

Our website features a wide range of tools and resources to help you achieve your fitness goals, including a customizable workout journal, a detailed exercise database, and progress tracking charts. We also offer a community feature where users can share their progress, get feedback and connect with other fitness enthusiasts.

We believe that tracking your workouts is a powerful way to take control of your fitness journey and make real progress. Whether you're a beginner just starting out or a seasoned athlete looking to take your training to the next level, our website is the perfect tool for you.

Our team is made up of fitness enthusiasts and experts who are passionate about helping people achieve their fitness goals. We are constantly working to improve our platform and add new features to make tracking your workouts as easy and effective as possible.

Thank you for choosing our website and we hope you find it helpful in your fitness journey.`;
let aboutTextShort = `Welcome to our website! We provide a user-friendly platform to easily document and monitor workout progress. Our tools include a customizable journal, exercise database and progress tracking charts. Join our community to share progress, get feedback, and connect with other fitness enthusiasts. Our team of fitness experts are dedicated to helping you achieve your goals. Thank you for choosing our website.`;

function about() {
  return (
    <>
      <Container>
        <CardGroup className="mt-2">
          <AboutCard text={aboutTextShort} title="The Short" logo={logo} />
          <AboutCard text={aboutTextLong} title="The Long" />
        </CardGroup>
      </Container>
    </>
  );
}

export default about;
