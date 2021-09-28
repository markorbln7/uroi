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

const addScrollListenerToBar = () => {
    setTimeout(() => {
        window.locoScroll.on('scroll', args => {
            if(args.scroll.y > window.innerHeight + document.querySelector('.fit').offsetHeight + document.querySelector('.types').offsetHeight) {
                document.querySelector('.tabs-bar').classList.add('tabs-bar--show');
            } else {
                document.querySelector('.tabs-bar').classList.remove('tabs-bar--show');
            }
        })
    }, 500)
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
    addScrollListenerToBar();
}

export const destroyMarkup = () => {
    document.querySelector('.tabs-bar').remove();
}