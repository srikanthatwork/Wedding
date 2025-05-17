import React, { Component } from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import gift1 from "../../images/gift/2.png";
// import gift2 from "../../images/gift/3.png";
// import gift3 from "../../images/gift/4.png";
// import gift4 from "../../images/gift/2.png";
import "./style.css";

class Gift extends Component {
  render() {
    // var settings = {
    //   dots: false,
    //   arrows: false,
    //   speed: 500,
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 1500,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //       },
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //       },
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //       },
    //     },
    //   ],
    // };
    return (
      <div className="gift-area">
        <div className="container">
          <div className="col-12">
            <div
              className="section-title text-center"
              style={{ marginBottom: "80px" }}
            >
              <h2>Welcome to Our Wedding</h2>
              <p>
                We are delighted to welcome you to our wedding celebration! Your
                presence means the world to us, and we feel truly blessed to
                share this joyous occasion with our loved ones. Thank you for
                being a part of our special day— a day filled with love,
                laughter, and lifelong memories
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gift;
