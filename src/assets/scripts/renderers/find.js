import DefaultRenderer from './default'
import Slider from '../modules/slider'

class FindRenderer extends DefaultRenderer {
    onEnterCompleted() {
        super.onEnterCompleted()

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