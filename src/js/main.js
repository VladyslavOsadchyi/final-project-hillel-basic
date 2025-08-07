// js
import "../js/click.js";
import "../js/tabs.js";
import Swiper from "swiper";
import { Pagination, Autoplay} from "swiper/modules";

// css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../scss/style.scss";

const swiper = new Swiper(".swiper", {
  modules: [Pagination, Autoplay],
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
