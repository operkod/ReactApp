import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderItem = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div className="slider__item">
      <div className="slider__item-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJU6vxcQ-hCX1BxKpCWHXhQeEoqJRpcPKMQ&usqp=CAU"
          alt=""
        />
      </div>
      <div className="slider__item-title">
        Сравнить и выбрать онлайн кредит в Одессе
      </div>
      <div className="slider__item-btn">
        <button>15 предложений</button>
      </div>
    </div>
  </div>
);

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className="section slider">
      <Slider {...settings}>
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </Slider>
    </div>
  );
};
export default SimpleSlider;
