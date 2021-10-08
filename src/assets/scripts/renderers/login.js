import DefaultRenderer from './default'
import LocoSroll from '../modules/locoScroll'

class LoginRenderer extends DefaultRenderer {
    onEnterCompleted() {
        this.darkNav = "add"
        super.onEnterCompleted()
    }
    onLeaveCompleted() {
        super.onLeaveCompleted()
    }
}

export default LoginRenderer;