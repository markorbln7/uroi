import DefaultRenderer from './default'
import Tabs from '../modules/tabs'
import {initIngredientsBar, destroyMarkup} from '../modules/ingredients-bar'

class IngredientRenderer extends DefaultRenderer {
    onEnterCompleted() {
        super.onEnterCompleted()
        initIngredientsBar()

        // TYPES TABS
        this.tabs = new Tabs({
          sections: document.querySelectorAll('.tab-section'),
          tabs: document.querySelectorAll('.tab-button'),
          barButtons: document.querySelectorAll('.tabs-bar__button'),
          scroll: this.LocoSroll
        })
    }
    onLeaveCompleted() {
        super.onLeaveCompleted()
        destroyMarkup()
    }
}

export default IngredientRenderer