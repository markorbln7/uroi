import Highway from '@dogstudio/highway';
import Tween from 'gsap';
import CartRenderer from '../renderers/cart';
import FindRenderer from '../renderers/find';
import HomepageRenderer from '../renderers/homepage';
import IngredientRenderer from '../renderers/ingredients';
import RegimenRenderer from '../renderers/regimen';


// Fade
class Fade extends Highway.Transition {
    in({ from, to, done }) {
      // Reset Scroll
      window.scrollTo(0, 0);
  
      // Remove Old View
      from.remove();
  
      // Animation
      Tween.fromTo(to, 0.5,
        { opacity: 0 },
        {
          opacity: 1,
          onComplete: done
        }
      );
    }
  
    out({ from, done }) {
      // Animation
      Tween.fromTo(from, 0.5,
        { opacity: 1 },
        {
          opacity: 0,
          onComplete: done
        }
      );
    }
  }
  
export default Fade;


const H = new Highway.Core({
    renderers: {
      ingredients: IngredientRenderer,
      regimen: RegimenRenderer,
      cart: CartRenderer,
      listCollection: FindRenderer,
      collection: FindRenderer,
      index: HomepageRenderer,
      s: FindRenderer,
      u: FindRenderer,
      product: FindRenderer
    },
    transitions: {
      default: Fade
    }
  });


  console.log('This is main js')