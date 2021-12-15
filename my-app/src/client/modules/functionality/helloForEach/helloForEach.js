import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {

    animals = [
        {
            Id: '1',
            Name: 'hi',
            Title: 'Panthera Tigris'
        },
        {
            Id: '2',
            Name: 'Orca',
            Title: 'Orcinus orca'
        },
        {
            Id: '3',
            Name: 'Hyena',
            Title: 'Hyaena hyaena'
        }
    ];

    /*handleClick(e) {
        /* event that sends info to parent
    }*/

} 