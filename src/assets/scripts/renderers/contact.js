import DefaultRenderer from './default'
import Slick from '../modules/slider';
import _each from 'lodash/each'

class ContactRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {
      super.onLeave()
    }
    onEnterCompleted() {
      super.onEnterCompleted()
    }
    onLeaveCompleted() {
      super.onLeaveCompleted()
    }
}

export default ContactRenderer;