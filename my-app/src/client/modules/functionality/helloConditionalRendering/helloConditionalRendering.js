import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    areDetailsVisible = false;
    cookies = 0;
    

    handleChange(event) {
        this.areDetailsVisible = event.target.checked;
    }

    handleAddCookie(event){
        this.cookies = event.detail;

        console.log(event.detail);
    }
}
