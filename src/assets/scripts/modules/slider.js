import _merge from "lodash/merge"
import Swiper from 'swiper'
const eventBus = require('js-event-bus')()

const defaultOptions = {
   slidesPerView: 'auto',
   grabCursor: true,

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   }
}

export default class Slider {
   constructor ({el, options}){
      let self = this

      this.el = el
      this.options = _merge({}, defaultOptions, options)

      this.initSlider()

      setTimeout(() => {
         self.swiper.update()
      }, 1000)

      eventBus.on('swiper.update', function() {
         self.swiper.update()
      })
   }
   initSlider() {
      this.swiper = new Swiper(this.el, this.options)
   }
 }