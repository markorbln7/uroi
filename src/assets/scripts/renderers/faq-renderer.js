import DefaultRenderer from './default'
import initAside from '../modules/aside'

class FaqRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {}

    onEnterCompleted() {
        super.onEnterCompleted()
        initAside(this.LocoSroll)

        // ACCORDIONS
        const buttons = document.querySelectorAll('.faq-accordion__button');
        buttons.forEach((button, i) => {
            button.addEventListener('click', () => {
                button.parentElement.classList.toggle('faq-accordion__item--active');
            })
        })
    }
    
    onLeaveCompleted() {
        super.onLeaveCompleted()
    }
}

export default FaqRenderer;