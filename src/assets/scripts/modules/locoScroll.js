import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'

export default class LocoSroll {
    constructor (options){
        this.$el = options.el[0]
        this.darkNav = options.darkNav
        
        this.toggleDarkNav(this.darkNav ? "add" : "remove")

        setTimeout(() => {
            this.initScroll()
            this.initScrollEvents()
        },100)
    }

    initScrollEvents() {
        this.scroll.on('scroll', args => {
            this.toggleDarkNav(args.scroll.y > 300 || this.darkNav ? "add" : "remove")
        })
    }

    toggleDarkNav(method = "remove") {
        document.querySelector('header').classList.[method]('header--dark')
    }

    initScroll() {
        this.scroll = new LocomotiveScroll({
            el: this.$el,
            smooth: true,
            inertia: 1
        })


        setTimeout(() => {
            this.scroll.update()
        }, 300)

        window.locoScroll = this.scroll
    }

    destroyScroll() {
        this.scroll.destroy()
    }

    updateScroll(el) {
        this.scroll.update()
        if(el) {
            this.scroll.scrollTo(el, {
                duration:1000,
                offset:-100
            })
        }        
    }
}