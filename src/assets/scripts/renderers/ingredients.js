import DefaultRenderer from './default'
import {initTabs} from '../modules/tabs';
import {initIngredientsBar, destroyMarkup} from '../modules/ingredients-bar';

class IngredientRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
        super.onEnterCompleted()
        initIngredientsBar();
        initTabs()
    }
    onLeaveCompleted() {
        destroyMarkup();
    }
}

export default IngredientRenderer;