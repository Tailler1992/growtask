import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export const fancybox = () => {
  Fancybox.bind("[data-fancybox]");
};
