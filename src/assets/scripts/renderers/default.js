import Highway from '@dogstudio/highway';
import LocoSroll from '../modules/locoScroll';

class DefaultRenderer extends Highway.Renderer {
    onEnter() {}
    onLeave() {
        console.log('UDRI')
        this.LocoSroll.destroyScroll()       
    }
    onEnterCompleted() {
        this.LocoSroll = new LocoSroll({
            el: $("#wrapper")
        })
    }
    onLeaveCompleted() {
        
    }
}

export default DefaultRenderer;