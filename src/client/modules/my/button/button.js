import { LightningElement } from 'lwc';

export default class EventSimple extends LightningElement {
    navBtns = [
        {
            id: '1',
            page: 'Home'
        },
        {
            id: '2',
            page: 'Gallery'
        },
        {
            id: '3',
            page: 'About'
        }
    ];

    handlePage(e) {
        if (e.path[0].innerText === 'Home') {
            console.log(e.path[0].innerText);
        }
        if (e.path[0].innerText === 'Gallery') {
            console.log(e.path[0].innerText);
        }
        if (e.path[0].innerText === 'About') {
            console.log(e.path[0].innerText);
        }
    }
}
