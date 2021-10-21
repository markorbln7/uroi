import DefaultRenderer from './default'
import Slider from '../modules/slider'
import { initTypesBar, destroyMarkup } from '../modules/types-bar'
import _each from 'lodash/each'
import AddAll from '../modules/addAll'

import Swiper from 'swiper'
import Tabs from '../modules/tabs'

class RegimenRenderer extends DefaultRenderer {
  onEnterCompleted() {
    super.onEnterCompleted()

    // TYPES HELPER NAV
    initTypesBar()

    // TYPES TABS
    this.tabs = new Tabs({
      sections: document.querySelectorAll('.tab-section'),
      tabs: document.querySelectorAll('.tab-button'),
      barButtons: document.querySelectorAll('.tabs-bar__button'),
      scroll: this.LocoSroll
    })
    
    // ADD ALL EVENT
    // on each element there should be data-ids='xxx,xxx,xxx'
    this.addAll = new AddAll('.add-all')

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
    destroyMarkup()
  }
}

export default RegimenRenderer