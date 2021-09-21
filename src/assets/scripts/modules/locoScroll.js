import LocomotiveScroll from 'locomotive-scroll';

export default class LocoSroll {
    constructor (options){
        this.$el = options.el[0]
        setTimeout(() => {
            this.initScroll()
        },100)
    }

    initScroll() {
        this.scroll = new LocomotiveScroll({
            el: this.$el,
            smooth: true,
            inertia: 1
        })
    }
    destroyScroll() {
        this.scroll.destroy()
        this.$el.css("transform", "none")
    }
}