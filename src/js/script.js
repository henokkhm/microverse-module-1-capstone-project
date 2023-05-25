import generateAllSpeakersMarkup from './helpers/generate-speakers-markup.js';

const speakersTarget = document.querySelector('#speakers__content');

const mountSpeakersList = () => {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    // When the speakers are mounted for the first time to a mobile 
    // screen, the list should be collapsed by default. 
    // To expand the list, the user must click on the "MORE" button.
    speakersTarget.setAttribute('data-expanded', false);
    speakersTarget.innerHTML = generateAllSpeakersMarkup(false);
  } else {
    // For desktop, the speakers list should be expanded by default.
    speakersTarget.setAttribute('data-expanded', true);
    speakersTarget.innerHTML = generateAllSpeakersMarkup(true);
  }
};

// Add event listener to the "MORE"/"LESS" buttons
speakersTarget.addEventListener('click', (e) => {
  if (e.target.id === 'see-more-speakers-btn') {
    speakersTarget.setAttribute('data-expanded', true);
    speakersTarget.innerHTML = generateAllSpeakersMarkup(true);
  } else if (e.target.id === 'see-fewer-speakers-btn') {
    speakersTarget.setAttribute('data-expanded', false);
    speakersTarget.innerHTML = generateAllSpeakersMarkup(false);
  }
});

window.addEventListener('resize', mountSpeakersList);
window.addEventListener('load', mountSpeakersList);
