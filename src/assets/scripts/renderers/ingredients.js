import DefaultRenderer from './default'
import Tabs from '../modules/tabs'
import {initIngredientsBar, destroyMarkup} from '../modules/ingredients-bar'

class IngredientRenderer extends DefaultRenderer {
    onEnterCompleted() {
        super.onEnterCompleted()
        initIngredientsBar()

        // TYPES TABS
        this.tabs = new Tabs({
          scroll: this.LocoSroll
        })
    }
    onLeaveCompleted() {
        super.onLeaveCompleted()
        destroyMarkup()
    }
}

export default IngredientRenderer