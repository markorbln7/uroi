export function initTypesBar() {
    addMarkupToHeader();

    const barButtons = document.querySelectorAll('.tabs-bar__button');
    const tabs = document.querySelectorAll('.types__card')

    barButtons.forEach((button, i) => {
        button.addEventListener('click', function() {
            tabs[i].click();
        })
    })
}

const addMarkupToHeader = () => {
    const markup = `
        <ul class="tabs-bar tabs-bar--types">
            <li>
                <button class="tabs-bar__button tabs-bar__button--active">Oily/combination</button>
            </li>
            <li>
                <button class="tabs-bar__button">Normal</button>
            </li>
            <li>
                <button class="tabs-bar__button">Sensitive</button>
            </li>
            <li>
                <button class="tabs-bar__button">Dry Skin</button>
            </li>
        </ul>
    `;

    document.querySelector('header').insertAdjacentHTML('beforeend', markup);
}

export const destroyMarkup = () => {
    document.querySelector('.tabs-bar').remove();
}