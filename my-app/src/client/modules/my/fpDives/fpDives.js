import { LightningElement, track } from 'lwc';

export default class fpDives extends LightningElement {

    @track imgsrc;
    @track imgsrctwo;

    renderedCallback() {
        this.imgsrc = this.template.querySelector('[data-id="A"]');
        this.imgsrctwo = this.template.querySelector('[data-id="B"]');
    }

    page = 1;
    divetitle = "Cave Diving";
    diveinfotextp1 = "Follow along with the flow. Take in the awesome scenery. Let our professionally trained instructor's guide you on this next adventure. ";
    diveinfotextp2 = "this is another paragraph of stuff and info!"

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
                this.diveinfotextp1 = "Follow along with the flow. Take in the awesome scenery. Let our professionally trained instructor's guide you on this next adventure. ";
                this.imgsrc.src = "../../../resources/cavedive1.jpg";
                this.imgsrctwo.src = "../../../resources/cavedive2.jpg";
                this.divetitle = "Cave Diving"
                break;
            case 2:
                this.diveinfotextp1 = `The ocean floor next to our diving location is littered with sunken pirate vessels making for an ideal wreck driving trip. It is reputed as the "pirate's graveyard" and it is said that many years ago the sea and landmarks here possessed an unpredictable phenomena that are not seen anywhere else in the world, many of which made sailing extremely difficult. 
                The Grand Line used to be the home of some of the world's most notorious pirates, including the past era's "Pirate King".
                We at Grand Line Diving Inc. offer an exclusive look into these fallen vessels and an unforgettable experience as we gain a glimpse into the long past Pirate Era.`;
                this.divetitle = "Wreck Driving";
                this.imgsrc.src = "../../../resources/shipwreck.png";
                this.imgsrctwo.src = "../../../resources/shipwreck2.png";
                break;
            default:
                this.diveinfotext = "there was an error!"
        }
    }
}
