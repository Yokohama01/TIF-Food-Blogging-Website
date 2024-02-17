import React, { useState } from "react";
import SlideComponent from "./SlideComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Css/SlideDiv.css";

function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };
  return (
    <>
      <div className="slideDiv">
        <h1>Latest Articles</h1>

        <Swiper
          className="hello"
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <SlideComponent
              image="../../public/img/grilled-tomatoes-1-846x846 3.png"
              text="Grilled Tomatoes at Home"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideComponent
              image="../../public/img/grilled-tomatoes-1-846x846 4.png"
              text="Grilled Tomatoes at Home"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideComponent
              image="../../public/img/grilled-tomatoes-1-846x846 5.png"
              text="Grilled Tomatoes at Home"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideComponent
              image="../../public/img/grilled-tomatoes-1-846x846 6.png"
              text="Grilled Tomatoes at Home"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideComponent
              image="../../public/img/grilled-tomatoes-1-846x846 7.png"
              text="Grilled Tomatoes at Home"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideComponent
              image="../../public/img/grilled-tomatoes-1-846x846 8.png"
              text="Grilled Tomatoes at Home"
            />
          </SwiperSlide>
        </Swiper>
        <div>
        <p>Current Slide: {currentSlide + 1}</p>
        <button
          onClick={() => setCurrentSlide((prevSlide) => prevSlide - 1)}
          disabled={currentSlide === 0}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentSlide((prevSlide) => prevSlide + 1)}
          disabled={currentSlide === 5} {/* Assuming 5 is the last slide index */}
        >
          Next
        </button>
      </div>
      </div>
    </>
  );
}
export default Slide;
