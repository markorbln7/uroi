import { gsap } from 'gsap'
import _each from 'lodash/each'
const eventBus = require('js-event-bus')()

class Tabs {
    constructor(options) {
        this.activeIndex = 0

        this.sections = document.querySelectorAll('.tab-section')
        this.tabs = document.querySelectorAll('.tab-button')
        this.barButtons = document.querySelectorAll('.tabs-bar__button')

        this.activeSection = this.sections[this.activeIndex]
        this.scroll = options.scroll

        _each(this.tabs, (tab, i) => {
            tab.addEventListener('click', (e) => {
                this.onClick(e)
            })
        })
    }

    onClick(e) {
        if(this.activeIndex == e.currentTarget.dataset.index){
            return
        }

        // FADE OUT THE OLD SECTION
        this.activeSection.classList.add('transitioning')
        gsap.to(this.activeSection, 1, {
            opacity: 0,
            onComplete: () => {
                gsap.set(this.activeSection, { display: 'none' })
            }
        })


        // FADE IN THE NEW SECTION
        this.activeIndex = e.currentTarget.dataset.index
        let newActiveSection = this.sections[this.activeIndex - 1]
        newActiveSection.classList.remove('transitioning')
        gsap.set(newActiveSection, { display: 'block' })

        setTimeout(() => {
            eventBus.emit('swiper.update', newActiveSection)
        })

        gsap.fromTo(newActiveSection, 1, {
            opacity: 0
        }, {
            opacity: 1,
            delay: .05,
            onComplete: () => {
                this.scroll.updateScroll()
                this.activeSection = newActiveSection
            }
        })

        // REMOVE ACTIVE LINKS
        this.tabs.forEach(t => t.classList.remove('active'))
        this.barButtons.forEach(b => b.classList.remove('tabs-bar__button--active'))

        // SET ACTIVE LINKS
        e.currentTarget.classList.add('active')
        this.barButtons[this.activeIndex - 1].classList.add('tabs-bar__button--active')


        // UPDATE SCROLL
        setTimeout(() => {
            this.scroll.updateScroll('.shopify-tabs')
        })

        console.log("[tabs.js] active section changed:", this.activeSection, newActiveSection)
    }
}

export default Tabs