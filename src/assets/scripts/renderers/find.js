import DefaultRenderer from './default'
import Slider from '../modules/slider'
import Filter from '../modules/filter'

class FindRenderer extends DefaultRenderer {
    onEnterCompleted() {
        super.onEnterCompleted()

        this.filter = new Filter({
            options: document.querySelectorAll('.filter-option'),
            elements: document.querySelectorAll('.grid__card')
        })

        this.slider = new Slider({
            el: $('.find__slider'),
            options: {
                navigation: {
                    nextEl: '.find__arrow-next',
                    prevEl: '.find__arrow-prev',
                },
                slidesPerView: 'auto',
                breakpoints: {}
            }
        })
    }
    onLeaveCompleted() {
        super.onLeaveCompleted()
    }
}

export default FindRenderer;