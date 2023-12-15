import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";

export const swiper = new Swiper(".first-swiper", {
  modules: [Navigation],
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  grabCursor: true,
  centeredSlides: false,
  initialSlide: 0,
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 16,
    },
    440: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1650: {
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});





