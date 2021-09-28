export function initTypes() {

    const typesContainer = document.querySelector('.types__wrap');
    const sections = document.querySelectorAll('.regimen-section');
    
    typesContainer.addEventListener('click', function (e) {
        const clicked = e.target.closest('.types__card');

        // Guard clause
        if (!clicked) return;

        // Remove active classes
        document.querySelector('.types__active').classList.remove('types__active');
        document.querySelector('.regimen-section--show').classList.remove('regimen-section--show');

        // Activate tab
        clicked.querySelector('.types__span').classList.add('types__active');
        sections[+clicked.dataset.index].classList.add('regimen-section--show');
    });
}
