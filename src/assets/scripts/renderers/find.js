import DefaultRenderer from './default'
import Slider from '../modules/slider'
import Filter from '../modules/filter'

class FindRenderer extends DefaultRenderer {
    onEnterCompleted() {
        super.onEnterCompleted()

        this.filter = new Filter({
            options: document.querySelectorAll('.filter-option'), // filter options/links
            elements: document.querySelectorAll('.grid__card'), // elements to filter
            sortKeys: ['latest', 'rating'], // possible sort values 
            filterKeys: ['bestSeller', 'productType'] // possible filter keys
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