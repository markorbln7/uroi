import DefaultRenderer from './default';
import Slick from '../modules/slider';
import { initTypes } from '../modules/types';

class RegimenRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
       super.onEnterCompleted();
       console.log(123);
       initTypes();
       this.Slick = new Slick({
          el: $('.staples__slider')          
       })
    }
    onLeaveCompleted() {}
}

export default RegimenRenderer;