import Highway from '@dogstudio/highway'
import LocoSroll from '../modules/locoScroll'

class DefaultRenderer extends Highway.Renderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
        APP.Header.closeMenu()
        APP.ShopMenu.closeDrawer()

        this.LocoSroll = new LocoSroll({
            el: $("#wrapper")
        })
    }
    onLeaveCompleted() {
        this.LocoSroll && this.LocoSroll.destroyScroll() 
    }
}

export default DefaultRenderer