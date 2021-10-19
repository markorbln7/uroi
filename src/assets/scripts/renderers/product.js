import DefaultRenderer from './default'
import Slick from '../modules/slider'
import LocoSroll from '../modules/locoScroll'
import { initAccordion } from '../modules/accordion'

class ProductRenderer extends DefaultRenderer {
    initSlick() {
        this.Slick = new Slick({
            el: $('.find__slider'),
            options:{
                slidesToShow: 4,
                nextArrow: '.find__arrow-next',
                prevArrow: '.find__arrow-prev',
                responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                    }
                },
                ]
            }        
        })
    }

    initYotpo() {
        var api = new Yotpo.API(yotpo)
        let a = api.refreshWidgets()

        // BUDZ TIMEOUT - nadji nacin za callback od yotpoa
        setTimeout(() => {
            this.LocoSroll.updateScroll()
        }, 1000)
    }

    initQuantity() {
        let increase = document.querySelector('.inc')
        let decrease = document.querySelector('.dec')
        let cta = document.querySelector('.add-to-cart.atc-button')
        const ammount = document.querySelector('.ammount')

        increase.addEventListener('click', function () {
            let currentAmmount = Number(cta.getAttribute('data-quantity'))
            let toSet = currentAmmount + 1
            ammount.textContent = toSet
            cta.setAttribute('data-quantity', toSet) 
        })

        decrease.addEventListener('click', function () {
            let currentAmmount = Number(cta.getAttribute('data-quantity'))
            let toSet = currentAmmount - 1
            if (currentAmmount > 1) {
                ammount.textContent = toSet
                cta.setAttribute('data-quantity', toSet)
            }
        })
    }
    onEnterCompleted() {
        this.darkNav = true

        super.onEnterCompleted()
        this.initSlick()
        this.initQuantity()
        initAccordion()

        this.initYotpo()
        
    }
    onLeaveCompleted() {
        super.onLeaveCompleted()
    }
}

export default ProductRenderer