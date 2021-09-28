export function initIngredientsBar() {
    addMarkupToHeader();

    const barButtons = document.querySelectorAll('.tabs-bar__button');
    const tabs = document.querySelectorAll('.about__title')

    barButtons.forEach((button, i) => {
        button.addEventListener('click', function() {
            tabs[i].click();
        })
    })
}

const addMarkupToHeader = () => {
    const markup = `
        <ul class="tabs-bar tabs-bar--ingredient">
            <li>
                <button class="tabs-bar__button tabs-bar__button--active">Our Story</button>
            </li>
            <li>
                <button class="tabs-bar__button">Our History</button>
            </li>
            <li>
                <button class="tabs-bar__button">Our Ingredients</button>
            </li>
        </ul>
    `;

    document.querySelector('header').insertAdjacentHTML('beforeend', markup);
}

export const destroyMarkup = () => {
    document.querySelector('.tabs-bar').remove();
}