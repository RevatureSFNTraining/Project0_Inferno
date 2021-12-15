import { LightningElement } from 'lwc';

export default class buttonx extends LightningElement {
    handleCookies() {
        this.dispatchEvent(
            new CustomEvent('cookie', {
                detail: 999
            })
        );
    }
}
