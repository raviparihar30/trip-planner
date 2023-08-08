import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({ children,propsSettings }) {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    ...propsSettings
  };
  return <Slider {...settings}>{children}</Slider>;
}
