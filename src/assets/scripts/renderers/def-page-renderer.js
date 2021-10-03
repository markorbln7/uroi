import Highway from '@dogstudio/highway';
import LocoSroll from '../modules/locoScroll';

class DefPageRenderer extends Highway.Renderer {
    onEnter() {}
    onLeave() {
        this.LocoSroll.destroyScroll()       
    }
    onEnterCompleted() {
        this.LocoSroll = new LocoSroll({
            el: $("#wrapper")
        })
    }
    onLeaveCompleted() {
        super.onLeaveCompleted()
    }
}

export default DefPageRenderer;