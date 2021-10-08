import DefaultRenderer from './default'
import Slick from '../modules/slider'
import _each from 'lodash/each'

class HomepageRenderer extends DefaultRenderer {
    onEnterCompleted() {
      super.onEnterCompleted()
      
      _each($('.staples__slider'), (el) => {
        this.Slick = new Slick({el:$(el)})
      })
    }
    onLeaveCompleted() {
      super.onLeaveCompleted()
    }
}

export default HomepageRenderer