import Highway from '@dogstudio/highway';
import Tween from 'gsap';
import CartRenderer from '../renderers/cart';
import FaqRenderer from '../renderers/faq-renderer';
import FindRenderer from '../renderers/find';
import HomepageRenderer from '../renderers/homepage';
import IngredientRenderer from '../renderers/ingredients';
import RegimenRenderer from '../renderers/regimen';
import DefPageRenderer from '../renderers/def-page-renderer';
import ProductRenderer from '../renderers/product';
import ContactRenderer from '../renderers/contact';


// Fade
class Fade extends Highway.Transition {
    in({ from, to, done }) {
      // Reset Scroll
      window.scrollTo(0, 0);
  
      // Remove Old View
      from.remove();

      done()
  
      // Animation
      // Tween.to(to, 0.1, {
      //     opacity: 1,
      //     // delay: 1,
      //     onComplete: done
      // });
    }
  
    out({ from, done }) {
      // Animation
      Tween.to(from, 0.25,{
          opacity: 0,
          onComplete: done
      });
    }
  }
  
export default Fade;


const H = new Highway.Core({
    renderers: {
      ingredients: IngredientRenderer,
      regimen: RegimenRenderer,
      cart: CartRenderer,
      listCollections: FindRenderer,
      collection: FindRenderer,
      index: HomepageRenderer,
      s: FindRenderer,
      u: FindRenderer,
      product: ProductRenderer,
      faq: FaqRenderer,
      contact: ContactRenderer,
      defpage: DefPageRenderer
    },
    transitions: {
      default: Fade
    }
  })