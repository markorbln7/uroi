export function initAccordion() {
    if(document.querySelector('.full-acc')) {
        const acc = document.querySelector('.full-acc');

        acc.addEventListener('click', e => {
            const btn = e.target.closest('.full-acc__button');

            if(btn.parentElement.classList.contains('full-acc__list-item--open')) {
                btn.parentElement.classList.remove('full-acc__list-item--open');
            } else {
                try {
                    document.querySelector('.full-acc__list-item--open').classList.remove('full-acc__list-item--open')
                } catch (error) {}
                btn.parentElement.classList.add('full-acc__list-item--open');
            }
        })
    }
}