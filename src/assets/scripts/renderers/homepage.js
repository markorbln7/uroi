import DefaultRenderer from './default'
import Slick from '../modules/slider';
import _each from 'lodash/each'

class HomepageRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
      super.onEnterCompleted()
      _each($('.staples__slider'), (el) => {
        this.Slick = new Slick({el:$(el)})
      })
    }
    onLeaveCompleted() {}
}

export default HomepageRenderer;