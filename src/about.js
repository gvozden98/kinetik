import React from "react";
import AboutCard from "./components/aboutCard";
import { Container, CardGroup } from "react-bootstrap";
import logo from "./utils/kineti_logo.png";

let aboutTextLong = `Welcome to our website, the ultimate destination for weightlifters of all levels! Our website is dedicated to providing you with an extensive library of exercises for weightlifting that you can use to build strength, increase muscle mass, and achieve your fitness goals.

Whether you are a beginner or an experienced weightlifter, our library of exercises has something for everyone. We have carefully curated a collection of exercises that are designed to target specific muscle groups, from the chest and arms to the back and legs. With our comprehensive database of exercises, you can easily create customized workout plans that are tailored to your fitness level and goals.

At our website, we are committed to providing you with accurate and up-to-date information about each exercise. Our exercise database includes detailed descriptions, images, and even instructional videos to ensure that you perform each exercise correctly and safely.

Our website is designed to be user-friendly and easy to navigate, with intuitive search functions that make it simple to find the exercises you need. We also offer a variety of tools and resources to help you stay motivated and on track, including workout logs and progress tracking tools.

We are passionate about weightlifting and believe that everyone can benefit from incorporating strength training into their fitness routine. Whether you are looking to build muscle, lose weight, or simply improve your overall health, our website has everything you need to achieve your goals. Thank you for visiting our website, and we look forward to helping you on your weightlifting journey!`;
let aboutTextShort = `Our website is a comprehensive library of weightlifting exercises, with detailed instructions and illustrations to help you perform each exercise correctly and safely. Whether you're a beginner or a seasoned weightlifter, our library has something for everyone. Start exploring our collection today and take your weightlifting game to the next level!`;

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
