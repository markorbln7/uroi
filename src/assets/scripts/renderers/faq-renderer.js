import Highway from '@dogstudio/highway';
import LocoSroll from '../modules/locoScroll';

class FaqRenderer extends Highway.Renderer {
    onEnter() {}
    onLeave() {
        this.LocoSroll.destroyScroll()       
    }
    onEnterCompleted() {
        this.LocoSroll = new LocoSroll({
            el: $("#wrapper")
        })

        // const buttons = document.querySelectorAll('.faq-accordion__button');
        // const sideButtons = document.querySelectorAll('.def-page__list-item');
        // const titles = document.querySelectorAll('.def-page__title');

        // sideButtons.forEach((button, i) => {
        //     button.addEventListener('click', () => {
        //         this.LocoSroll.scrollTo(titles[i]);
        //     })
        // })
       
        // buttons.forEach((button, i) => {
        //     button.addEventListener('click', () => {
        //         button.parentElement.classList.toggle('faq-accordion__item--active');
        //     })
        // })
    }
    onLeaveCompleted() {
        
    }
}

export default FaqRenderer;