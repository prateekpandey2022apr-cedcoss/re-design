import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <div className="carousel-container">
        <div className="wrapper">
          <Carousel showThumbs={false}>
            <div>
              <img src="../images/bbanner-1.jpg" />
            </div>
            <div>
              <img src="../images/offer-2.jpg" />
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default DemoCarousel;
