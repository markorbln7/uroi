import _merge from "lodash/merge"
import Swiper from 'swiper'


const defaultOptions = {
   slidesPerView: 'auto',

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   }
}

export default class Slider {
   constructor ({el, options}){
      this.el = el
      this.options = _merge({}, defaultOptions, options)
      this.initSlider()
   }
   initSlider() {
      this.swiper = new Swiper(this.el, this.options)
   }
 }