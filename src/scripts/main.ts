import "../styles/reset/reset.pcss";
// import "../styles/variables/variables.pcss";
import "../styles/variables/variables.scss";
import "../styles/style.pcss";

import "../partials/hero/hero.scss";

import "../partials/header/header.pcss";
// import "../partials/hero/hero.pcss";
import "../partials/about-us/about-us.pcss";
import "../partials/presentation/presentation.pcss";
import "../partials/info/info.pcss";
import "../partials/footer/footer.pcss";
import "../partials/slider/slider.pcss";

import {initMobileMenu} from "./initMobileMenu.ts";
import {initFansybox} from "./initFansybox.ts";
import {initSwiperGallery} from "./initSwiperGallery.ts";
import {initSwiper} from "./initSwiper.ts";
import {tabs} from "./tabs.ts";
import {accordion} from "./accordion.ts";
import {scrolling} from "./scrolling.ts";

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  tabs();
  accordion();
  scrolling();
  initFansybox("[data-fancybox]");
  initSwiper(".slider__swiper");
  initSwiperGallery(".gallery");
});
