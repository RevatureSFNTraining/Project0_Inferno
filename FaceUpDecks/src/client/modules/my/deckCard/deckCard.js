import {LightningElement, api} from 'lwc';

export default class DeckCard extends LightningElement{
    @api deckType = "Blankity";
    @api deckDescription = "Something or Other";
    @api deckImage = "./resources/kabukijester.jpg";
    @api deckPrice = "Expensive";
    showDescription = false;
    @api deckSold = false;

    handleDescriptionVisible(){
        this.showDescription = true;
    }
    
    handleDescriptionNotVisible(){
        this.showDescription = false;
    }

    handleSale(){
        this.deckImage="./resources/soldout.png"
        this.deckPrice="Restocking"
        this.deckDescription="We thank you for your continued patronage and support but, unfortunately, this deck is currently out of stock."
        this.deckSold=true;
    }
}