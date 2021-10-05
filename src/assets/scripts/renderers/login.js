import DefaultRenderer from './default'

class LoginRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {
        super.onLeave()
    }
    onEnterCompleted() {
        super.onEnterCompleted()
        document.querySelector('.header').classList.add('header--always-dark');
    }
    onLeaveCompleted() {
        super.onLeaveCompleted()
        document.querySelector('.header').classList.remove('header--always-dark');
    }
}

export default LoginRenderer;