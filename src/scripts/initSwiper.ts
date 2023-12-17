import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const initSwiper = (swiperSelector: string) => {
  new Swiper(swiperSelector, {
    slidesPerView: 1.1,
    modules: [Navigation],
    navigation: {
      nextEl: ".slider__button-next",
      prevEl: ".slider__button-prev",
    },
    centeredSlides: false,
    initialSlide: 0,
    loop: true,

    breakpoints: {
      380: {
        slidesPerView: 1.22,
      },
      430: {
        slidesPerView: 1.5,
      },
      540: {
        slidesPerView: 1.8,
      },
      680: {
        slidesPerView: 2.6,
      },
      980: {
        slidesPerView: 3.94,
      },

      1366: {
        slidesPerView: 4.2,
      },
      1920: {
        slidesPerView: 4.18,
      },
    },
  });
};
