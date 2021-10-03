import DefaultRenderer from './default'
import initAside from '../modules/aside'

class DefPageRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
      super.onEnterCompleted()
      initAside(this.LocoSroll)
    }
    onLeaveCompleted() {
      super.onLeaveCompleted()
    }
}

export default DefPageRenderer;