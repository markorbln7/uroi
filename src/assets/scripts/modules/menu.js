import { gsap } from 'gsap'

class Menu {
    constructor (options) {
        // INIT VARS
        this.open = false
        this.animationDuration = .5

        this.$el = options.el
        this.menu = options.menu
        this.hamburger = options.hamburger
        this.openClass = options.openClass

        // INIT EVENTS
        this.hamburger.addEventListener('click', (e) => {
            this.toggleHamburger(e)
        })

        // MAKE IT CLOSED INITIALLY
        this.closeMenu(true)
    }

    toggleHamburger() {
        this.open = !this.open
        this[this.open ? 'openMenu' : 'closeMenu']()
    }

    openMenu(instant) {
        this.$el.classList.add(this.openClass)
        document.body.classList.add('noscroll')

        let duration = instant ? 0 : this.animationDuration
        gsap.set(this.menu, { visibility: 'visible' })
        gsap.to(this.menu, {
            opacity: 1,
            duration,
            overwrite: true
        })
    }

    closeMenu(instant) {
        this.$el.classList.remove(this.openClass)
        document.body.classList.remove('noscroll')

        let duration = instant ? 0 : this.animationDuration
        gsap.to(this.menu, {
            opacity: 0,
            overwrite: true,
            duration,
            onComplete: () => {
                gsap.set(this.menu, { visibility: 'hidden' })
            }
        })
    }
}

export default Menu