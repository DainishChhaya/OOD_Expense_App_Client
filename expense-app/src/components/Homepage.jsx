import React from "react";
import { Carousel } from "react-bootstrap";

import "../styles/Homepage.css";
// import angelaImage from "../Assets/";
// import Daniel from "../Assets/Daniel.jpg";
// import Mario from "../Assets/Mario.jpg";
// import Catalina from "../Assets/Catalina.jpg";
import img1 from "../Assets/download1Up.jpg";
import img2 from "../Assets/download2Up.jpg";
import img3 from "../Assets/download3Up.jpg";

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="who-we-are">
        <div>
          <h1>
            Welcome to ExpenseTrack, where financial wellness meets simplicity!
          </h1>
          <p>
            At ExpenseTrack, we serve as your central hub for seamless financial
            management, connecting individuals, dedicated financial
            professionals, and organizations committed to fostering a healthier
            relationship with money.
          </p>
          <p>
            Our commitment extends beyond mere expense tracking; it's a genuine
            advocacy for everyone's right to financial clarity, control, and a
            prosperous future. We believe that the journey to financial
            well-being is a collective effort, and we strive to create a
            user-friendly platform that empowers individuals and organizations
            alike.
          </p>
          <p>
            As a beacon of financial empowerment, we follow a unique principle –
            we don't charge excessive fees for our services. Instead, we
            encourage users to explore our "Ways to Save" section. Here, you'll
            discover opportunities to make a positive impact on your financial
            health and support our shared mission of promoting financial
            stability.
          </p>
          <p>
            Join us on this transformative journey, where the power of financial
            awareness and responsible spending changes lives, one budget at a
            time. Together, let's make the world a more financially secure place
            for everyone. Welcome to ExpenseTrack – where financial well-being
            finds its home!
          </p>
        </div>
      </section>

      {/* Image Carousel */}
      <Carousel className="image-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Child 1" />
          <Carousel.Caption>
            <h3>Angela</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              tortor vitae massa consequat posuere non at tellus.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Child 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Child 3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Child 4" />
        </Carousel.Item>
      </Carousel>

      {/* Quote Carousel */}
    </div>
  );
};

export default Homepage;
