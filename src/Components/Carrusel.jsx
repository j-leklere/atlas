import styles from "./Carrusel.module.css";
import photo1 from "../Assets/atlas-product-1.jpg";
import photo2 from "../Assets/atlas-product-2.jpg";
import photo3 from "../Assets/atlas-product-3.jpg";
import photo4 from "../Assets/atlas-product-4.jpg";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronRight,
//   faChevronLeft,
// } from "@fortawesome/free-solid-svg-icons";

// Swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Carrusel() {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#FFF",
        "--swiper-navigation-color": "#FFF",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "1.4rem",
        "--swiper-pagination-bullet-horizontal-gap": "0.8rem",
      }}
      className={styles["swiper"]}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet" }}
    >
      <SwiperSlide>
        <img className={styles["photo"]} src={photo1} alt="Back of a T-shirt" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles["photo"]} src={photo2} alt="Back of a T-shirt" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles["photo"]} src={photo3} alt="Back of a T-shirt" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles["photo"]} src={photo4} alt="Back of a T-shirt" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carrusel;

// style={{
//   "--swiper-pagination-color": "#FFF",
//   "--swiper-pagination-bullet-inactive-color": "#999999",
//   "--swiper-pagination-bullet-inactive-opacity": "1",
//   "--swiper-pagination-bullet-size": "1.3",
//   "--swiper-pagination-bullet-horizontal-gap": "6px",
// }}
