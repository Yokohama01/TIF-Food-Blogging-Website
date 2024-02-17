import SlideComponent from "./SlideComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Css/SlideDiv.css";
function Slide() {
  return (
    <>
      <div className="slideDiv">
        <h1>Latest Articles</h1>

        <Swiper
          className="swiperClass"
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 50,
            },

            1000: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
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
      </div>
    </>
  );
}
export default Slide;
