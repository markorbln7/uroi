import DefaultRenderer from './default'
import initAside from '../modules/aside'

class DefPageRenderer extends DefaultRenderer {
    onEnterCompleted() {
      super.onEnterCompleted()
      initAside(this.LocoSroll)
    }
    onLeaveCompleted() {
      super.onLeaveCompleted()
    }
}

export default DefPageRenderer