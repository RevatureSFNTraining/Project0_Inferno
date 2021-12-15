import {LightningElement} from 'lwc';

export default class DeckCard extends LightningElement{
    deckType = "Blankity";
    deckDescription = "Something or Other";
    deckImage = "./resources/kabukijester.jpg";
    deckPrice = "Expensive";
    showDescription = true;
}