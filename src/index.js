import { contactPageLoadFunction } from './contactPageLoad';
import { menuPageLoadFunction } from './menuPageLoad';
import { homePageLoadFunction } from './homePageLoad';

const content = document.querySelector('#content');
const homeButton = document.querySelector('#homeButton');
const menuButton = document.querySelector('#menuButton');
const contactButton = document.querySelector('#contactButton');
const homeTabDiv = document.querySelector('#homeTabDiv');
const menuTabDiv = document.querySelector('#menuTabDiv');
const contactTabDiv = document.querySelector('#contactTabDiv');


homePageLoadFunction();


homeTabDiv.addEventListener('click', homePageLoadFunction);
menuTabDiv.addEventListener('click', menuPageLoadFunction);
contactTabDiv.addEventListener('click', contactPageLoadFunction);
