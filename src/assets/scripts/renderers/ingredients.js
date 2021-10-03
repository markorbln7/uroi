import DefaultRenderer from './default'
import Tabs from '../modules/tabs'
import {initIngredientsBar, destroyMarkup} from '../modules/ingredients-bar'

class IngredientRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {
        super.onLeave()
    }
    onEnterCompleted() {
        super.onEnterCompleted()
        initIngredientsBar();

        this.tabs = new Tabs({
            scroll: this.LocoSroll
        })
    }
    onLeaveCompleted() {
        super.onLeaveCompleted()
        destroyMarkup();
    }
}

export default IngredientRenderer;