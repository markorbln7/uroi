import { gsap } from 'gsap'

class Menu {
    constructor (options) {
        // INIT VARS
        this.open = false
        this.animationDuration = .5

        this.$el = options.el
        this.menu = this.$el.querySelector('.header__menu')
        this.hamburger = this.$el.querySelector('.header__hamburger')

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
        let duration = instant ? 0 : this.animationDuration
        document.body.classList.add('noscroll')
        this.$el.classList.add('header--open')

        gsap.set(this.menu, { visibility: 'visible' })
        gsap.to(this.menu, {
            opacity: 1,
            duration,
            overwrite: true
        })
    }

    closeMenu(instant) {
        let duration = instant ? 0 : this.animationDuration
        document.body.classList.remove('noscroll')
        this.$el.classList.remove('header--open')

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