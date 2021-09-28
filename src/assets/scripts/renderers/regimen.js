import DefaultRenderer from './default';
import Slick from '../modules/slider';
import { initTypes } from '../modules/types';
import { initTypesBar } from '../modules/types-bar';

class RegimenRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
       super.onEnterCompleted();
       initTypesBar();
       initTypes();
       this.Slick = new Slick({
          el: $('.staples__slider')          
       })
    }
    onLeaveCompleted() {}
}

export default RegimenRenderer;