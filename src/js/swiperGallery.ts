import Swiper from "swiper";

export const swiperGallery = new Swiper(".gallery", {
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 16,
    },
    768: {
      enabled: true,
      slidesPerView: 2,
      grabCursor: true,
    },
  },
});



