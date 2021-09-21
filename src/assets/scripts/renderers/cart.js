import Highway from '@dogstudio/highway';

class CartRenderer extends Highway.Renderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
        $(window).ready(function(){
            setInterval(function(){ 
              $('#cart').addClass("loaded")
            }, 1000);
        });
    }
    onLeaveCompleted() {}
}

export default CartRenderer;