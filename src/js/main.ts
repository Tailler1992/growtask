import "../styles/reset/reset.pcss";
import "../styles/variables/variables.pcss";
import "../styles/style.pcss";
import "../styles/components/header.pcss";
import "../styles/components/hero.pcss";
import "../styles/components/about-us.pcss";
import "../styles/components/slider.pcss";
import "../styles/components/presentation.pcss";
import "../styles/components/info.pcss";
import "../styles/components/footer.pcss";

import {burger} from "./burger.ts";
import {fancybox} from "./fancybox.ts";
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
  fancybox();
});
