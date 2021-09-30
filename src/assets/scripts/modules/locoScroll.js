import LocomotiveScroll from 'locomotive-scroll';

export default class LocoSroll {
    constructor (options){
        this.$el = options.el[0]
        setTimeout(() => {
            this.initScroll()
            console.log(this.scroll)
            this.scroll.on('scroll', args => {
                if(args.scroll.y > 300) {
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
        //this.$el.css("transform", "none")
        console.log('DESTROY')
    }

    updateScroll(el) {
        console.log("UPDATE",this.scroll) 
        this.scroll.update()
        if(el) {
            this.scroll.scrollTo(el, {
                duration:1000,
                offset:-100
            })
        }        
    }
}