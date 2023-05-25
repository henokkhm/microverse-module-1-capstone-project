import speakersData from './speakers-data.js';

const seeMoreSpeakersButton = `
  <button class="secondary-btn" id="see-more-speakers-btn">
    <span>more</span>
    <img src="assets/icons/arrow.svg" alt="" />
  </button>
`;

const seeFewerSpeakersButton = `
  <button class="secondary-btn" id="see-fewer-speakers-btn">
    <span>less</span>
    <img class="see-fewer-speakers-arrow" src="assets/icons/arrow.svg" alt="" />
  </button>
`;

const generateSingleSpeakersMarkup = (speakerData) => {
  const { imgSrc, imgAlt, name, title, intro } = speakerData;

  return `
    <li class="speakers__card">
      <div class="speakers__speaker-photo">
        <img
          src="${imgSrc}"
          alt="${imgAlt}"
        />
      </div>
      <div class="speakers__card__details">
        <h3 class="speakers_speaker-name">${name}</h3>
        <span class="speakers__speaker-title">${title}</span>
        <span class="divider"></span>
        <p class="speakers__speaker-intro">${intro}</p>
      </div>
    </li>
`;
};

const generateAllSpeakersMarkup = (shouldBeExpanded) => {
  let speakers;
  let btn = '';

  // shouldBeExpanded === true => mount all speakers
  // shouldBeExpanded === false => mount only two speakers

  if (shouldBeExpanded) {
    speakers = [...speakersData];
  } else {
    speakers = [...speakersData].slice(0, 2);
  }

  // If mounting to a mobile screen, add the "MORE"/"LESS" button
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    if (shouldBeExpanded) {
      btn = seeFewerSpeakersButton;
    } else {
      btn = seeMoreSpeakersButton;
    }
  }

  // Create the HTML of each speaker's card
  const listItems = [];
  speakers.forEach((speaker) => {
    const html = generateSingleSpeakersMarkup(speaker);
    listItems.push(html);
  });

  // Return the list items and the button
  return `
    <ul class="speakers__cards-wrapper">
      ${listItems.join('\n')}
    </ul>
    ${btn}
  `;
};

export default generateAllSpeakersMarkup;
