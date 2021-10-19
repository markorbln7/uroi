import DefaultRenderer from './default'
import Slider from '../modules/slider'
import _each from 'lodash/each'
import { initAccount } from '../modules/account'


class HomepageRenderer extends DefaultRenderer {
    onEnterCompleted() {
      this.darkNav = false

      super.onEnterCompleted()

      initAccount()
      
       // INIT THE SLIDERS
       this.sliders = []
      _each($('.swiper'), (el, i) => {

        this.sliders[i] = new Slider({
          el:$(el),
          
          // swiper options
          options: {
            slidesPerView: 1,
            breakpoints: {
              768: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 3
              }
            }
          }

        })
      })
    }
    onLeaveCompleted() {
      super.onLeaveCompleted()
    }
}

export default HomepageRenderer