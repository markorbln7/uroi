import DefaultRenderer from './default'

class ContactRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
      super.onEnterCompleted()
    }
    onLeaveCompleted() {
      super.onLeaveCompleted()
    }
}

export default ContactRenderer;