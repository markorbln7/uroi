import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
const eventBus = require('js-event-bus')()

export default class LocoSroll {
    constructor (options){
        let self = this

        this.$el = options.el[0]
        this.darkNav = options.darkNav
        
        this.toggleDarkNav(this.darkNav ? "add" : "remove")

        setTimeout(() => {
            this.initScroll()
            this.initScrollEvents()
        },100)

        eventBus.on('loco.update', function() {
            self.updateScroll()
        })
    }

    initScrollEvents() {
        this.scroll.on('scroll', args => {
            this.toggleDarkNav(args.scroll.y > 300 || this.darkNav ? "add" : "remove")
        })
    }

    toggleDarkNav(method = "remove") {
        document.querySelector('header').classList.[method]('header--scrolled')
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
        if(!this.scroll){
            return
        }

        this.scroll.update()
        if(el) {
            this.scroll.scrollTo(el, {
                duration:1000,
                offset:-100
            })
        }        
    }
}