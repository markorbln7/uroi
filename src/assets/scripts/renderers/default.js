import Highway from '@dogstudio/highway';
import LocoSroll from '../modules/locoScroll';

class DefaultRenderer extends Highway.Renderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
        this.LocoSroll = new LocoSroll({
            el: $("#wrapper")
        })
    }
    onLeaveCompleted() {
        this.LocoSroll.destroyScroll()
    }
}

export default DefaultRenderer;