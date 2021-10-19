import DefaultRenderer from './default'
import LocoSroll from '../modules/locoScroll'
import { initLogin } from '../modules/login'

class LoginRenderer extends DefaultRenderer {
    onEnterCompleted() {
        this.darkNav = true
        super.onEnterCompleted()
        initLogin()
    }
    onLeaveCompleted() {
        super.onLeaveCompleted()
    }
}

export default LoginRenderer;