export function initAccount() {
    if(document.querySelector('.my-acc')) {
        const liArr = document.querySelectorAll('.my-acc__list-item');
        const orders = document.querySelector('[data-section="orders"]');
        const newsletter = document.querySelector('[data-section="newsletter"]');
        const backBtns = document.querySelectorAll('.my-acc__back');
        const toggleCheckbox = document.querySelector('.toggle-checkbox');

        toggleCheckbox.addEventListener('click', () => {
            toggleCheckbox.classList.toggle('active');
        })

        backBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelector('.my-acc__tab--open').classList.remove('my-acc__tab--open');
            })
        });

        liArr.forEach(li => {
            li.addEventListener('click', () => {
                switch (li.dataset.open) {
                    case 'orders':
                        orders.classList.add('my-acc__tab--open');
                        break;
                    case 'newsletter':
                        newsletter.classList.add('my-acc__tab--open');
                        break;
                
                    default:
                        break;
                }
            })
        })
    }
}