const travelData = [
  {
    name: "ARMENIA",
    place: "Yerevan, Noravank",
    image: 'https://flagcdn.com/w320/am.png', // Armenia flag
    description: 'Rich history and stunning landscapes await in this Eurasian gem.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipOckJc-hCFFogNIGlSWzi3GOD-FEoyrw-OWesQAZ9YXsv7rTbDqS5jn0J5P7u8x6g', // Replace with actual album link
  },
  {
    name: "BOSNIA & HERZ. #1",
    place: "Sarajevo, Mostar",
    image: 'https://flagcdn.com/w320/ba.png', // Bosnia and Herzegovina flag
    description: 'A blend of Ottoman and European cultures set against breathtaking vistas.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipP-PWvYG2vUuCMnDXwcPzxEQh8luLGp-96q8lro4N_ewnKeaPA2lRe2O6-VAzKjUg', // Replace with actual album link
  },
  {
    name: "BOSNIA & HERZ. #2",
    place: "Sarajevo, Travnik, Jajice, Konjic, Donje Vakuv, etc.",
    image: 'https://flagcdn.com/w320/ba.png', // Bosnia and Herzegovina flag
    description: 'Hidden treasures of natural beauty and historical intrigue.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipNC5jjf1Etq5cFMwmiCXg_e1Jqhl0vzCL1KNLm5LmSRH4dtRwZirc1xscAkNw39QQ', // Replace with actual album link
  },
  {
    name: "BELGIUM",
    place: "Brussels",
    image: 'https://flagcdn.com/w320/be.png', // Belgium flag
    description: 'Home to medieval towns, chocolate delights, and artistic legacies.',
    latitude: 50.8503,
    longitude: 4.3517,
    photoAlbumLink: 'https://photos.google.com/share/AF1QipNTvZpKhY8mSG801B9pRSIegY67H638MMaBc2LI563pyWYUMvswmoPNhHhNhjvoEw', // Replace with actual album link
  },
  {
    name: "SWITZERLAND",
    place: "Zurich, Bern",
    image: 'https://flagcdn.com/w320/ch.png', // Switzerland flag
    description: 'Alpine landscapes, precision watches, and cultural diversity await.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipNTcUPZa0BIpLqm9YWSJhVaca2ha8AaJJTY8EGaEs5HW8Fcj9Dvm4aJVtCx-F00Fw', // Replace with actual album link
  },
  {
    name: "CZECH REPUBLIC",
    place: "Prague",
    image: 'https://flagcdn.com/w320/cz.png', // Czech Republic flag
    description: 'Bohemian charm meets Gothic architecture in the heart of Europe.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipPOLxLWYp35Wfljoa3OflDlzEWoR2r8jc0VdrfQ-WMh4YGz_R71wPIWcbe7a8k61w', // Replace with actual album link
  },
  {
    name: "GERMANY",
    place: "Berlin",
    image: 'https://flagcdn.com/w320/de.png', // Germany flag
    description: 'A vibrant cityscape of history, art, and modern innovation.',
    latitude: 52.520,
    longitude: 13.4050,
    photoAlbumLink: 'https://photos.google.com/share/AF1QipPPV2BHilYB_jHHbHDLrrXeAvA2sfx88nky1DA8pQgGTCzpv1cbI9gl-GqyTrETXg', // Replace with actual album link
  },
  {
    name: "FRANCE",
    place: "Paris",
    image: 'https://flagcdn.com/w320/fr.png', // France flag
    description: 'The epitome of romance, art, and culinary excellence.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipNxqUUtz56E1iJTy15gYD8sLEnogBAO7m6ZrgIoyfp4tU34SF1kyXKeh71exPPByw', // Replace with actual album link
  },
  {
    name: "UNITED KINGDOM",
    place: "Oxford, London",
    image: 'https://flagcdn.com/w320/gb.png', // United Kingdom flag
    description: 'Iconic landmarks, literary history, and royal splendor.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipNWWOl1idiyX65Ev25tdF0GxPnxNPkVR-nBcuTGILjKySUP0eQwO5yLJMyaS2cR4A', // Replace with actual album link
  },
  {
    name: "GEORGIA",
    place: "Tbilisi, Kaspi",
    image: 'https://flagcdn.com/w320/ge.png', // Georgia flag
    description: 'Cultural crossroads of Caucasus charm and ancient traditions.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipNcQc4Zx1sRVB8lirT3FX8yyqnChGgmOJYx7gAHyKksM-0PtFI-l1cnAxMtdkyjew', // Replace with actual album link
  },
  {
    name: "CROATIA #1",
    place: "Dubrovnik",
    image: 'https://flagcdn.com/w320/hr.png', // Croatia flag
    description: 'Adriatic jewel with medieval walls, azure waters, and Mediterranean allure.',
    photoAlbumLink: 'https://photos.google.com/album/AF1QipOaaZ8gKNeAhkSyz4-x0GAP0Qd7ES-qTWW4l62U', // Replace with actual album link
  },
  {
    name: "CROATIA #2",
    place: "Loviste, Orebic, Korcula",
    image: 'https://flagcdn.com/w320/hr.png', // Croatia flag
    description: 'Sun-drenched islands and coastal towns steeped in history.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipPLjQy8pSjcfQzrzVV9F-tX1AXTZu9sSho01Wdoo_J4bwKs5S9fdpjUkBj_h7UzNQ', // Replace with actual album link
  },
  {
    name: "HUNGARY",
    place: "Budapest",
    image: 'https://flagcdn.com/w320/hu.png', // Hungary flag
    description: 'Danube charm, thermal baths, and architectural splendor.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipN3Yrk69z30jCjXBo8HMGCwANdpcvaZlqaS1UddlQkQiXHVQ5yH8wnNfTujVV7Z8g', // Replace with actual album link
  },
  {
    name: "ITALY",
    place: "Venice",
    image: 'https://flagcdn.com/w320/it.png', // Italy flag
    description: 'Canals, gondolas, and Renaissance grandeur in the City of Water.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipOvEKOUYXenvrCvYd4-QixRL-Zexaois_cpmB_Ckt2uAYTiEtnb6CSJka5kXiJWyA', // Replace with actual album link
  },
  {
    name: "MOROCCO",
    place: "Casablanca, Rabat, Tangier, Chefchaoen, Ouazzane, Meknes, Fez, Midelt, Erfoud, Ouarzazate, Ait Ben Haddou, Marrakesh",
    image: 'https://flagcdn.com/w320/ma.png', // Morocco flag
    description: 'Exotic souks, desert dunes, and a tapestry of Berber culture.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipOPj9VSNKtCFQjd-Pd1Ag9VNG-tRLdUpKFCRiFSXYMuy32s1XnedJ27CJAiuLkYQA?key=UTZ6bGhZRU9xY2JHQnNybXhmY3F2R2g4UnNocmlR', // Replace with actual album link
  },
  {
    name: "MONTENEGRO",
    place: "Kotor, Budva",
    image: 'https://flagcdn.com/w320/me.png', // Montenegro flag
    description: 'Montenegro’s coast: where Adriatic beauty meets medieval charm.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipPAp9zJ9iIwS9WFxm90YLjK4KQaee_SRR3-U3P0UB3UqDSC3nWhIqbrso1HIrGkFg', // Replace with actual album link
  },
  {
    name: "NETHERLANDS",
    place: "Amsterdam, Rotterdam",
    image: 'https://flagcdn.com/w320/nl.png', // Netherlands flag
    description: 'Canals, tulips, and a progressive spirit in the land of windmills.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipOid9NwaXNCbuVsecsT_EXQ29ADKL6WacwdlYDrJYnKy379oSPIUydrP2dx59hmLw', // Replace with actual album link
  },
  {
    name: "PORTUGAL",
    place: "Lisbon, Porto, Braga, Cascais, Sintra",
    image: 'https://flagcdn.com/w320/pt.png', // Portugal flag
    description: 'Portugal’s coast: from vibrant cities to historic fortresses.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipPg9B5thYv4-0Bfg1sgYAzKlgDb8v38_oXS94q1Omoa4LeYnYARVqDDe_NZO-xa4g', // Replace with actual album link
  },
  {
    name: "SERBIA",
    place: "Belgrade",
    image: 'https://flagcdn.com/w320/rs.png', // Serbia flag
    description: 'A dynamic blend of Slavic tradition and modern vibrancy.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipMRn0ijg6z5ZY1kbyTdAZ5DT15QBdmVwURO1gLphukQ82aJ7-lLtc8GtOV3AMfXtw', // Replace with actual album link
  },
  {
    name: "TURKEY",
    place: "Istanbul",
    image: 'https://flagcdn.com/w320/tr.png', // Turkey flag
    description: 'East meets West in Istanbul: a city of minarets and markets.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipPs9olQh7chVy_lRxoG4TIEmPyLBBx5axrFA47Z69AT0O6-LdF9Pnhn11bsC8ZCsA', // Replace with actual album link
  },
  {
    name: "USA #3",
    place: "Palm Springs, CA",
    image: 'https://flagcdn.com/w320/us.png', // USA flag
    description: 'Desert retreat with mid-century modern allure and natural beauty.',
    photoAlbumLink: 'https://photos.google.com/album/AF1QipMc2_Xrhwyb1634OE5za3lIrlAWivqdheMF23EI', // Replace with actual album link
  },
  {
    name: "USA #2",
    place: "NYC, DC, Baltimore",
    image: 'https://flagcdn.com/w320/us.png', // USA flag
    description: 'American landmarks, political powerhouses, and East Coast charm.',
    photoAlbumLink: 'https://photos.google.com/album/AF1QipNPtFeWV4z6qEm2LVV48mV3j1-9qjy1LgHM042p', // Replace with actual album link
  },
  {
    name: "USA #1",
    place: "New York City, NY",
    image: 'https://flagcdn.com/w320/us.png', // USA flag
    description: 'The city that never sleeps: skyscrapers, culture, and culinary diversity.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipP6RvIbnXVHO_9r9gjlGp0tc_mr2t69XOX7ZmvGkw_16g0DwP5Qs75SmExLANVEPA', // Replace with actual album link
  },
  // Add more entries as needed
];

export default travelData;