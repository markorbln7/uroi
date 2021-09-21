import _merge from "lodash/merge"

const defaultOptions = {
   infinite: false,
   speed: 300,
   slidesToShow: 3,
   slidesToScroll: 1,
   nextArrow: '.staples__arrow-next',
   prevArrow: '.staples__arrow-prev',
   responsive: [
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1
         }
      }
   ]
}

 export default class Slick {
   constructor ({el, options}){
      this.el = el
      this.options = _merge({}, defaultOptions, options)
      this.initSlider()
   }
   initSlider() {
      this.el.slick(this.options)
   }
 }