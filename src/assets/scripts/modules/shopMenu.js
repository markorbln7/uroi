class ShopMenu {
    constructor (options) {
        const drawerToggler = document.querySelector('.open-drawer')
        this.drawer = document.querySelector('.menu-drawer')
        this.drop = document.querySelector('.menu-drop')

        this.drop.addEventListener('click', (e) => {
            this.closeDrawer(e)
        })

        drawerToggler.addEventListener('click', (e) => {
            this.openDrawer(e)
        })
    }

    openDrawer(e) {
        this.drawer.classList.add('menu-drawer--open')
    }

    closeDrawer(e) {
        this.drawer.classList.remove('menu-drawer--open')
    }
}


export default ShopMenu