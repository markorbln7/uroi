import DefaultRenderer from './default';
import Slick from '../modules/slider';

class RegimenRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
       super.onEnterCompleted()
       this.Slick = new Slick({
          el: $('.staples__slider')          
       })
    }
    onLeaveCompleted() {}
}

export default RegimenRenderer;