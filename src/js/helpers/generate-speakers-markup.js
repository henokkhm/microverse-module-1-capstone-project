const generateSingleSpeakersMarkup = (speakerData) => {
  const {
    imgSrc,
    imgAlt,
    name,
    title,
    intro,
  } = speakerData;

  return `
    <div class="speakers__card">
      <img
        class="speakers__speaker-photo"
        src="${imgSrc}"
        alt="${imgAlt}"
      />
      <h3 class="speakers_speaker-name">${name}</h3>
      <span class="speakers__speaker-title">${title}</span>
      <p class="speakers__speaker-intro">${intro}</p>
    </div>
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
