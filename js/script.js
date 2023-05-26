import generateAllSpeakersMarkup from './helpers/generate-speakers-markup.js';

const speakersTarget = document.querySelector('#speakers__content');
const navbarWrapper = document.querySelector('#nav-bar-wrapper');
const mainNavLogo = document.querySelector('#main-nav__logo');

const mountSpeakersList = () => {
  // Prevent this function from running on the About page
  if (!speakersTarget) { return; }

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
};

// Show navbar for desktop screens
const handleNavbarResize = () => {
  const isDesktop = window.innerWidth >= 768;
  if (isDesktop) {
    navbarWrapper.setAttribute('data-visible', true);
    mainNavLogo.setAttribute('src', 'assets/icons/logo-lg.svg');
  } else {
    navbarWrapper.setAttribute('data-visible', false);
    mainNavLogo.setAttribute('src', 'assets/icons/logo-lg-light.svg');
  }
};

window.addEventListener('resize', mountSpeakersList);
window.addEventListener('resize', handleNavbarResize);
window.addEventListener('load', mountSpeakersList);
window.addEventListener('load', handleNavbarResize);
