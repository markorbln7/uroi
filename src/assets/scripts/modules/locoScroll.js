import LocomotiveScroll from 'locomotive-scroll';

export default class LocoSroll {
    constructor (options){
        this.$el = options.el[0]
        setTimeout(() => {
            this.initScroll()
            this.scroll.on('scroll', args => {
                if(args.scroll.y > window.innerHeight) {
                    document.querySelector('header').classList.add('header--dark');
                } else {
                    document.querySelector('header').classList.remove('header--dark');
                }
            })
        },100)
    }

    initScroll() {
        this.scroll = new LocomotiveScroll({
            el: this.$el,
            smooth: true,
            inertia: 1
        })

        window.locoScroll = this.scroll;
    }

    destroyScroll() {
        this.scroll.destroy()
        this.$el.css("transform", "none")
    }
}