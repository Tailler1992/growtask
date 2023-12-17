import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export const initFansybox = (imgSelector: string) => {
  Fancybox.bind(imgSelector);
};
