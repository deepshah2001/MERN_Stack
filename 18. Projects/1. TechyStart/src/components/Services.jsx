import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        showStatus={false}
        interval={1000}
        // showIndicators={false}
        // showThumbs={false}
      >
        <div>
          <img src={img1} alt="Full Stack" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="MERN Stack" />
          <p className="legend">MERN Stack</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
