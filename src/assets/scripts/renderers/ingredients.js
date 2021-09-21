import Highway from '@dogstudio/highway';

class IngredientRenderer extends Highway.Renderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
        const tabs = document.querySelectorAll('.about__title');
        const tabsContainer = document.querySelector('.about__title-box');
        const tabsContent = document.querySelectorAll('.about__img-box');
    
        tabsContainer.addEventListener('click', function (e) {
        const clicked = e.target.closest('.about__title');
    
        // Guard clause
        if (!clicked) return;
    
        // Remove active classes
        tabs.forEach(t => t.classList.remove('about__active'));
        tabsContent.forEach(c => c.classList.remove('about__active-content'));
    
        // Activate tab
        clicked.classList.add('about__active');
    
        // Activate content area
        document
            .querySelector(`.about__img-box--${clicked.dataset.tab}`)
            .classList.add('about__active-content');
        });
    }
    onLeaveCompleted() {}
}

export default IngredientRenderer;