import { initAccount } from '../modules/account';
import DefaultRenderer from './default'

class AccountRenderer extends DefaultRenderer {
    onEnter() {}
    onLeave() {}
    onEnterCompleted() {
        super.onEnterCompleted()
        initAccount();
    }
    onLeaveCompleted() {}
}

export default AccountRenderer;