import Highway from '@dogstudio/highway';

class IngredientRenderer extends Highway.Renderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
        console.log('I got in ====================================================');
    }
    onLeaveCompleted() {}
}

export default IngredientRenderer;