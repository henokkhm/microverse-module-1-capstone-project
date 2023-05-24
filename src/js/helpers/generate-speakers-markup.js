const generateSingleSpeakersMarkup = (speakerData) => {
  const {
    imgSrc,
    imgAlt,
    name,
    title,
    intro,
  } = speakerData;

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
        <p class="speakers__speaker-intro">${intro}</p>
      </div>
    </li>
`;
};

const generateAllSpeakersMarkup = (allSpeakersData) => {
  const result = [];
  allSpeakersData.forEach((speaker) => {
    const html = generateSingleSpeakersMarkup(speaker);
    result.push(html);
  });

  return result.join('\n');
};

export default generateAllSpeakersMarkup;
