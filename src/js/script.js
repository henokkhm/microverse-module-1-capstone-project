import speakersData from './helpers/speakers-data.js';
import generateAllSpeakersMarkup from './helpers/generate-speakers-markup.js';

const speakersCardsWrapper = document.querySelector('#speakers__cards-wrapper');

speakersCardsWrapper.innerHTML = generateAllSpeakersMarkup(speakersData);