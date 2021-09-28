

export function initTabs() {
    const tabs = document.querySelectorAll('.about__title');
    const tabsContainer = document.querySelector('.about__title-box');
    const tabsContent = document.querySelectorAll('.about__img-box');
    const barButtons = document.querySelectorAll('.tabs-bar__button');
    const sections = document.querySelectorAll('.ingredient-section');
    
    tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.about__title');

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach(t => t.classList.remove('about__active'));
    tabsContent.forEach(c => c.classList.remove('about__active-content'));
    barButtons.forEach(b => b.classList.remove('tabs-bar__button--active'));

    // Activate tab
    clicked.classList.add('about__active');
    barButtons[clicked.dataset.tab - 1].classList.add('tabs-bar__button--active');
    document.querySelector('.ingredient-section--show').classList.remove('ingredient-section--show');
    sections[clicked.dataset.tab - 1].classList.add('ingredient-section--show');

    // Activate content area
    document
        .querySelector(`.about__img-box--${clicked.dataset.tab}`)
        .classList.add('about__active-content');
    });
}
