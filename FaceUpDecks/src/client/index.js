import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
import MyApp from 'my/app';
import MyAvailableDecks from 'my/availableDecks';

// const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
// document.querySelector('#main').appendChild(app);

const availableDecks = createElement('my-available-decks', {is: MyAvailableDecks});
document.querySelector('#main').appendChild(availableDecks);
