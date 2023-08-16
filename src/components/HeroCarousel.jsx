import { PrevArrow, NextArrow } from "../Arrows";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroCarousel(props) {
  const { Image } = props;
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 782,
        settings: {
          centerMode: false,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="">
        <Slider {...settings}>
          {Image.map((image) => {
            return (
              <div className="px-1 py-0.5 md:py-2 ">
                <img
                  src={image}
                  className="w-full h-full rounded"
                  alt="carousel image"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
