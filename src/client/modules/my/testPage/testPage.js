import { LightningElement } from 'lwc';

export default class TestPage extends LightningElement {
    detailsDisplayed = false;

    handleClick() {
        this.detailsDisplayed = !this.detailsDisplayed;
    }
  
}