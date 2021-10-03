const initAside = (scroller) => {
    const sideButtons = document.querySelectorAll('.def-page__list-item');

    sideButtons.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            let sectionTitle = e.target.dataset.title
            let section = document.querySelector(`[data-section="${sectionTitle}"]`)
            scroller.updateScroll(section)
        })
    })
}

export default initAside