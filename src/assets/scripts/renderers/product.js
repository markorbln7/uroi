import DefaultRenderer from './default'
import Slick from '../modules/slider'
import LocoSroll from '../modules/locoScroll'

class ProductRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {
        super.onLeave()
    }
    onEnterCompleted() {
        // super.onEnterCompleted()

        this.LocoSroll = new LocoSroll({
            el: $("#wrapper"),
            darkNav: "add"
        })


        this.Slick = new Slick({
            el: $('.find__slider'),
            options:{
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
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
    onLeaveCompleted() {
        super.onLeaveCompleted()
    }
}

export default ProductRenderer;