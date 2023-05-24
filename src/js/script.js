import speakersData from './helpers/speakers-data.js';
import generateAllSpeakersMarkup from './helpers/generate-speakers-markup.js';

const speakersCardsWrapper = document.querySelector('#speakers__cards-wrapper');

const addSpeakersToDOM = () => {
  const firstSpeaker = speakersData[0];
  const secondSpeaker = speakersData[1];
  if (window.innerWidth <= 768) {
    speakersCardsWrapper.innerHTML = generateAllSpeakersMarkup([
      firstSpeaker,
      secondSpeaker,
    ]);
  } else {
    speakersCardsWrapper.innerHTML = generateAllSpeakersMarkup(speakersData);
  }
};

window.addEventListener('resize', addSpeakersToDOM);
window.addEventListener('load', addSpeakersToDOM);
