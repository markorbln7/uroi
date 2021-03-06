import axios from 'axios'
import _map from 'lodash/map'
import _each from 'lodash/each'
import _size from 'lodash/size'

class AddAll {
  constructor (element) {
    if(!element){
      return
    }

    this.buttons = document.querySelectorAll(element)

    if(_size(this.buttons)){
      _each(this.buttons, (btn) => {
        btn.addEventListener('click', this.addToCart)
      })
    }
  }

  async addToCart(e) {
    let ids = e.currentTarget.dataset.ids.split(",")

    if(!ids){
      return
    }

    let items = _map(ids, (id) => {
      return {
        quantity: 1,
        id
      }
    })

    try {      
      await axios.post('/cart/add.js', {
        items
      })

      // update and open the cart
      if(APP.Cart){        
        APP.Cart.refreshCart()
        APP.Cart.toggleCart(true)
      }

    } catch(err) {
      console.warn('[addAll.js] error:', err)
    }
  }

  // @TODO: check if we need this
  destroy() {
    if(_size(this.buttons)){
      _each(this.buttons, (b) => {
        this.button.removeEventListener('click', this.addToCart)
      })
    }
  }
}

export default AddAll