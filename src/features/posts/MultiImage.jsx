import React from "react";
import Slider from "react-slick";
import postImg from "@/assets/insta_pic.jpg";
import postImg2 from "@/assets/insta_pic2.jpeg";

export default function MultiImage() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider_customize",
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={postImg} className="rounded" alt="roy" />
      </div>
      <div>
        <img src={postImg2} className="rounded" alt="roy" />
      </div>
      <div>
        <img src={postImg} className="rounded" alt="roy" />
      </div>
      <div>
        <img src={postImg2} className="rounded" alt="roy" />
      </div>
      <div>
        <img src={postImg} className="rounded" alt="roy" />
      </div>
      <div>
        <img src={postImg2} className="rounded" alt="roy" />
      </div>
    </Slider>
  );
}
