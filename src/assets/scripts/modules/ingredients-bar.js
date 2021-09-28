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

const addScrollListenerToBar = () => {
    setTimeout(() => {
        window.locoScroll.on('scroll', args => {
            if(args.scroll.y > window.innerHeight + document.querySelector('.about').offsetHeight) {
                document.querySelector('.tabs-bar').classList.add('tabs-bar--show');
            } else {
                document.querySelector('.tabs-bar').classList.remove('tabs-bar--show');
            }
        })
    }, 500)
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
    addScrollListenerToBar();
}

export const destroyMarkup = () => {
    document.querySelector('.tabs-bar').remove();
}