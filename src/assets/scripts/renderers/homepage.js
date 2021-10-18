import DefaultRenderer from './default'
import Slick from '../modules/slider'
import _each from 'lodash/each'
import { initAccount } from '../modules/account'


class HomepageRenderer extends DefaultRenderer {
    onEnterCompleted() {
      this.darkNav = false

      super.onEnterCompleted()

      initAccount()
      
      _each($('.staples__slider'), (el) => {
        this.Slick = new Slick({el:$(el)})
      })
    }
    onLeaveCompleted() {
      super.onLeaveCompleted()
    }
}

export default HomepageRenderer