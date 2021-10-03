import DefaultRenderer from './default'

class FaqRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {}

    onEnterCompleted() {
        super.onEnterCompleted()

        // SCROLL TO ASIDE
        const sideButtons = document.querySelectorAll('.def-page__list-item');
        sideButtons.forEach((btn, i) => {
            btn.addEventListener('click', (e) => {
                let sectionTitle = e.target.dataset.title
                let section = document.querySelector(`[data-section="${sectionTitle}"]`)
                this.LocoSroll.updateScroll(section)
            })
        })

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