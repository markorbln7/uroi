import Highway from '@dogstudio/highway'
import LocoSroll from '../modules/locoScroll'

class DefaultRenderer extends Highway.Renderer {
    initLoco() {
        this.LocoSroll = new LocoSroll({
            el: $("#wrapper"),
            darkNav: this.darkNav
        })
    }

    onEnterCompleted() {
        APP.MainMenu.closeMenu()
        APP.ShopMenu.closeDrawer()
        this.initLoco()
    }
    onLeaveCompleted() {
        this.LocoSroll && this.LocoSroll.destroyScroll() 
    }
}

export default DefaultRenderer