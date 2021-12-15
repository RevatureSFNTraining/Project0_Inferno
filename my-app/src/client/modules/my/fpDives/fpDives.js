import { LightningElement, track } from 'lwc';

export default class fpDives extends LightningElement {

    @track imgsrc;

    renderedCallback() {
        this.imgsrc = this.template.querySelector('[data-id="A"]');
    }

    page = 1;
    divetitle = "Drift Diving";
    diveinfotext = "Follow along with the flow. Take in the awesome scenery. Let our professionally trained instructor's guide you on this next adventure. ";

    handlePrevious() {
        if (this.page > 1) {
            this.page = this.page - 1;
            this.myTextSetter(this.page);
        }
    }

    handleNext() {
        if (this.page < 2) {
            this.page = this.page + 1;
            this.myTextSetter(this.page);
        }
    }

     myTextSetter(pg) {
        let pages = pg;

        switch(pages) {
            case 1:
                this.diveinfotext = "Follow along with the flow. Take in the awesome scenery. Let our professionally trained instructor's guide you on this next adventure. ";
                this.imgsrc.src = "../../../resources/shipwreck.jpg";
                this.divetitle = "Drift Diving"
                break;
            case 2:
                this.diveinfotext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id iaculis urna. Ut in lacus turpis. Nunc lorem neque, finibus eu varius nec, tincidunt ac libero. Aliquam luctus ultrices purus, ac ullamcorper urna lacinia sed. Aliquam tempor finibus orci vel ornare. Mauris pellentesque lorem dolor, quis pellentesque odio malesuada eget. Nullam eget malesuada metus. Pellentesque vel semper urna. Fusce laoreet, leo nec suscipit mattis, lorem odio dictum risus, vitae volutpat quam quam vitae urna. Ut cursus ligula nec dui vulputate porttitor. Praesent ut eros eget erat iaculis lobortis.";
                this.divetitle = "Wreck Driving";
                this.imgsrc.src = "../../../resources/shipwreck.jpg";
                break;
            default:
                this.diveinfotext = "there was an error!"
        }
    }
}
