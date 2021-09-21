import DefaultRenderer from './default'
import {initTabs} from '../modules/tabs';

class IngredientRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
        super.onEnterCompleted()
        initTabs()
    }
    onLeaveCompleted() {}
}

export default IngredientRenderer;