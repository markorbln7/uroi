import DefaultRenderer from './default'
import Slick from '../modules/slider'
import { initTypes } from '../modules/types'
import { initTypesBar, destroyMarkup } from '../modules/types-bar'
import _each from 'lodash/each'
import AddAll from '../modules/addAll'

class RegimenRenderer extends DefaultRenderer {
  onEnterCompleted() {
    super.onEnterCompleted()
    initTypesBar()
    initTypes()

    
    // ADD ALL EVENT
    // on each element there should be data-ids='xxx,xxx,xxx'
    this.addAll = new AddAll('.add-all')


    _each($('.staples__slider'), (el) => {
      this.Slick = new Slick({el:$(el)})
    })
  }

  onLeaveCompleted() {
    super.onLeaveCompleted()
    destroyMarkup()

    // remove the event handlers
    this.addAll.destroy()
  }
}

export default RegimenRenderer