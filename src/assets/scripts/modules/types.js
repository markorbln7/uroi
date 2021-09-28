export function initTypes() {
    const typesContainer = document.querySelector('.types__wrap');
    const sections = document.querySelectorAll('.regimen-section');
    const barButtons = document.querySelectorAll('.tabs-bar__button');
    
    typesContainer.addEventListener('click', function (e) {
        const clicked = e.target.closest('.types__card');

        // Guard clause
        if (!clicked) return;

        // Remove active classes
        document.querySelector('.types__active').classList.remove('types__active');
        document.querySelector('.regimen-section--show').classList.remove('regimen-section--show');
        document.querySelector('.tabs-bar__button--active').classList.remove('tabs-bar__button--active');
        
        // Activate tab
        clicked.querySelector('.types__span').classList.add('types__active');
        sections[+clicked.dataset.index].classList.add('regimen-section--show');
        barButtons[+clicked.dataset.index].classList.add('tabs-bar__button--active');
    });
}
