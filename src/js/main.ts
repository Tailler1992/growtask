import "../assets/styles/reset/reset.pcss";
import "../assets/styles/variables/variables.pcss";
import "../assets/styles/style.pcss";
import "../assets/styles/components/header.pcss";
import "../assets/styles/components/hero.pcss";
import "../assets/styles/components/about-us.pcss";
import "../assets/styles/components/slider.pcss";
import "../assets/styles/components/presentation.pcss";
import "../assets/styles/components/info.pcss";
import "../assets/styles/components/footer.pcss";

import {burger} from "./burger.ts";
import {slider} from "./slider.ts";
import {tabs} from "./tabs.ts";
import {accordion} from "./accordion.ts";
import {scrolling} from "./scrolling.ts";


document.addEventListener("DOMContentLoaded", () => {
  burger();
  slider();
  tabs();
  accordion();
  scrolling();
});
