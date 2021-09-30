import DefaultRenderer from './default';
import Slick from '../modules/slider';
import { initTypes } from '../modules/types';
import { initTypesBar, destroyMarkup } from '../modules/types-bar';
import _each from 'lodash/each'

class RegimenRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {
      super.onLeave()
    }
    
    onEnterCompleted() {
       super.onEnterCompleted();
       initTypesBar();
       initTypes();
       _each($('.staples__slider'), (el) => {
         this.Slick = new Slick({el:$(el)})
       })
    }

    onLeaveCompleted() {
       super.onLeaveCompleted()
       destroyMarkup();
    }
}

export default RegimenRenderer;