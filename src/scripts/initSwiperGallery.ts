import Swiper from "swiper";

export const initSwiperGallery = (swiperSelector: string) => {
  new Swiper(swiperSelector, {
    breakpoints: {
      0: {
        enabled: true,
        slidesPerView: "auto",
        grabCursor: true,
      },
      900: {
        enabled: false,
        slidesPerView: "auto",
      },
    },
  });
};
