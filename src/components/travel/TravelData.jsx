const travelData = [
  {
    id: 1,
    name: "Mljet, Loviste, Korcula, Hvar (HRV)",
    place: "HRV #3",
    date: "AUG 30 - SEP 5, 2025",
    imageurl: 'src/assets/TravelHRV2.jpg', // USA flag
    description: 'A journey of turquoise bays, sunlit islands, and history woven into every stone path.',
    photoAlbumLink: 'https://photos.google.com/album/AF1QipPk7lhbt526c41eqYvY7o-DOOAVQodMRnFEl0d1', // Replace with actual album link
  },
  {
    id: 1,
    name: "Sarajevo, Konjica, Trebinje (HRV)",
    place: "BIH #3",
    date: "AUG 26 - 30, 2025",
    imageurl: 'src/assets/TravelBiH6.jpg', // 
    description: 'Bridging East and West with mountains, rivers, and timeless stories of resilience.',
    photoAlbumLink: 'https://photos.google.com/album/AF1QipO_4FUUozHy98czEwWRPPxIPYiUDHWKtsz-3n6r', // Replace with actual album link
  },
    {
    id: 1,
    name: "Boston, Province Island (USA)",
    place: "USA #6",
    date: "AUG 1 - 8, 2025",
    imageurl: 'src/assets/TravelUSA6.jpg', // USA flag
    description: 'A city of revolution and learning, where harbors, history, and culture meet daily.',
    photoAlbumLink: 'https://photos.google.com/album/AF1QipPGCWhhNw6VoBLO2eDU-rxufyY30hR7dPitGPlT', // Replace with actual album link
  },
  {
    id: 1,
    name: "Boston, MA (USA)",
    place: "USA #5",
    date: "DEC 22 - 30, 2024",
    imageurl: 'src/assets/TravelUSA5.png', // USA flag
    description: 'Where Amerian history meets innovation, and every cobblestone tells a story.',
    photoAlbumLink: 'https://photos.google.com/album/AF1QipOFh42C3p4To_LbxBaaOGXgnW-ndOy_rKeEWdu8', // Replace with actual album link
  },

  {
    id: 1,
    name: "Maui, HW (USA)",
    place: "USA #4",
    date: "AUG 7 - 17, 2024",
    imageurl: 'src/assets/TravelUSA4.png', // USA flag
    description: 'From the jungles to the beaches, an American tropical paradise.',
    photoAlbumLink: 'https://photos.google.com/album/AF1QipMJ-169Z6Opuxg3dpGq2NMFRriEs2ftRFfFaewS', // Replace with actual album link
  },

  {
    id: 1,
    name: "Palm Springs, CA (USA)",
    place: "USA #3",
    date: "May 20 - 30, 2024",
    imageurl: 'src/assets/TravelUSA3.png', // USA flag
    description: 'Desert retreat with mid-century modern allure and natural beauty.',
    photoAlbumLink: 'https://photos.google.com/album/AF1QipMc2_Xrhwyb1634OE5za3lIrlAWivqdheMF23EI', // Replace with actual album link
  },

  {
    id: 2,
    name: "NYC, DC, Baltimore (USA)",
    place: "USA #2",
    date: "Dec 20, 2023 - Jan 4, 2024",
    imageurl: 'src/assets/TravelUSA2.png', // USA flag
    description: 'American landmarks, political powerhouses, and East Coast charm.',
    photoAlbumLink: 'https://photos.google.com/album/AF1QipNPtFeWV4z6qEm2LVV48mV3j1-9qjy1LgHM042p', // Replace with actual album link
  },

  {
    id: 3,
    name: "Loviste, Orebic, Korcula (HRV)",
    place: "CROATIA #2",
    date: "Sep 5 - 17, 2023",
    imageurl: 'src/assets/TravelCroatia2.png', // Croatia flag
    description: 'Sun-drenched islands and coastal towns steeped in history.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipPLjQy8pSjcfQzrzVV9F-tX1AXTZu9sSho01Wdoo_J4bwKs5S9fdpjUkBj_h7UzNQ', // Replace with actual album link
  },

  {
    id: 4,
    name: "Tbilisi, Shida Kartli (GEO)",
    place: "GEORGIA",
    date: "Aug 27 - Sep 3, 2023",
    imageurl: 'src/assets/TravelGeorgia.png', // Georgia flag
    description: 'Cultural crossroads of Caucasus charm and ancient traditions.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipNcQc4Zx1sRVB8lirT3FX8yyqnChGgmOJYx7gAHyKksM-0PtFI-l1cnAxMtdkyjew', // Replace with actual album link
  },

  {
    id: 5,
    name: "Yerevan, Lusarat, Yeghegnadzor (ARM)",
    place: "ARMENIA",
    date: "Aug 22 - 27, 2023",
    imageurl: 'src/assets/TravelArmenia.png', // Armenia flag
    description: 'Rich history and stunning landscapes await in this Eurasian gem.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipOckJc-hCFFogNIGlSWzi3GOD-FEoyrw-OWesQAZ9YXsv7rTbDqS5jn0J5P7u8x6g', // Replace with actual album link
  },

  {
    id: 6,
    name: "Belgrade (SRB)",
    place: "SERBIA",
    date: "Aug 19 - 22, 2023",
    imageurl: 'src/assets/TravelSerbia.png', // Serbia flag
    description: 'A dynamic blend of Slavic tradition and modern vibrancy.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipMRn0ijg6z5ZY1kbyTdAZ5DT15QBdmVwURO1gLphukQ82aJ7-lLtc8GtOV3AMfXtw', // Replace with actual album link
  }, 

  {
    id: 7,
    name: "Kotor, Budva (MNE)",
    place: "MONTENEGRO",
    date: "Aug 1 - 10, 2023",
    imageurl: 'src/assets/TravelMontenegro.png', // Montenegro flag
    description: 'Montenegro’s coast: where Adriatic beauty meets medieval charm.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipPAp9zJ9iIwS9WFxm90YLjK4KQaee_SRR3-U3P0UB3UqDSC3nWhIqbrso1HIrGkFg', // Replace with actual album link
  },

  {
    id: 8,
    name: "Dubrovnik (HRV)",
    place: "CROATIA #1",
    date: "Jul 27 - Aug 1, 2023",
    imageurl: 'src/assets/TravelCroatia1.png', // Croatia flag
    description: 'Adriatic jewel with medieval walls, azure waters, and Mediterranean allure.',
    photoAlbumLink: 'https://photos.google.com/album/AF1QipOaaZ8gKNeAhkSyz4-x0GAP0Qd7ES-qTWW4l62U', // Replace with actual album link
  },

  {
    id: 9,
    name: "Sarajevo, Travnik, Jajice, Konjic, Donje Vakuv, etc. (BIH)",
    place: "BOSNIA & HERZEGOVINA #2",
    date: "Jun 29 - Sep 18, 2023",
    imageurl: 'src/assets/TravelBosnia2.png', // Bosnia and Herzegovina flag
    description: 'Hidden treasures of natural beauty and historical intrigue.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipNC5jjf1Etq5cFMwmiCXg_e1Jqhl0vzCL1KNLm5LmSRH4dtRwZirc1xscAkNw39QQ', // Replace with actual album link
  },

  {
    id: 10,
    name: "Casablanca, Rabat, Tangier, Chefchaoen, Marrakesh, etc. (MAR)",
    place: "MOROCCO",
    date: "Feb 20 - 28, 2023",
    imageurl: 'src/assets/TravelMorocco.png', // Morocco flag
    description: 'Exotic souks, desert dunes, and a tapestry of Berber culture.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipOPj9VSNKtCFQjd-Pd1Ag9VNG-tRLdUpKFCRiFSXYMuy32s1XnedJ27CJAiuLkYQA?key=UTZ6bGhZRU9xY2JHQnNybXhmY3F2R2g4UnNocmlR', // Replace with actual album link
  },

  {
    id: 11,
    name: "New York City, NY (USA)",
    place: "USA #1",
    date: "Sep 29 - Dec 31, 2022",
    imageurl: 'src/assets/TravelUSA1.png', // USA flag
    description: 'The city that never sleeps: skyscrapers, culture, and culinary diversity.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipP6RvIbnXVHO_9r9gjlGp0tc_mr2t69XOX7ZmvGkw_16g0DwP5Qs75SmExLANVEPA', // Replace with actual album link
  },

  {
    id: 12,
    name: "Oxford, London (UK)",
    place: "UNITED KINGDOM",
    date: "Apr 11 - May 19, 2022",
    imageurl: 'src/assets/TravelBritain.png', // United Kingdom flag
    description: 'Iconic landmarks, literary history, and royal splendor.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipNWWOl1idiyX65Ev25tdF0GxPnxNPkVR-nBcuTGILjKySUP0eQwO5yLJMyaS2cR4A', // Replace with actual album link
  },

  {
    id: 13,
    name: "Paris (FRA)",
    place: "FRANCE",
    date: "May 12 - 15, 2022",
    imageurl: 'src/assets/TravelFrance.png', // France flag
    description: 'The epitome of romance, art, and culinary excellence.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipNxqUUtz56E1iJTy15gYD8sLEnogBAO7m6ZrgIoyfp4tU34SF1kyXKeh71exPPByw', // Replace with actual album link
  },

  {
    id: 14,
    name: "Zurich, Bern (CHE)",
    place: "SWITZERLAND",
    date: "May 10 - 12, 2022",
    imageurl: 'src/assets/TravelSwitzerland.png', // Switzerland flag
    description: 'Alpine landscapes, precision watches, and cultural richness.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipN5UJZ_9kjQLieDkW7AQDdHVdMiT4OkG6yIVNu2TIlfW6EuCZP6O8Qpdq9OSPyUew', // Replace with actual album link
  },

  {
    id: 15,
    name: "Venice (ITA)",
    place: "ITALY",
    date: "May 8 - 11, 2022",
    imageurl: 'src/assets/TravelItaly.png', // Italy flag
    description: 'Canals, gondolas, and Renaissance grandeur in the City of Water.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipOvEKOUYXenvrCvYd4-QixRL-Zexaois_cpmB_Ckt2uAYTiEtnb6CSJka5kXiJWyA', // Replace with actual album link
  },

  {
    id: 16,
    name: "Sarajevo, Mostar (BIH)",
    place: "BOSNIA & HERZEGOVIA #1",
    date: "May 22 - 27, 2023",
    imageurl: 'src/assets/TravelBosnia1.png', // Bosnia and Herzegovina flag
    description: 'A blend of Ottoman and European cultures set against breathtaking vistas.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipP-PWvYG2vUuCMnDXwcPzxEQh8luLGp-96q8lro4N_ewnKeaPA2lRe2O6-VAzKjUg', // Replace with actual album link
  },
  
  {
    id: 17,
    name: "Istanbul (TUR)",
    place: "TURKEY",
    date: "Apr 27 - May 1, 2022",
    imageurl: 'src/assets/TravelTurkey.png', // Turkey flag
    description: 'East meets West in Istanbul: a city of minarets and markets.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipPs9olQh7chVy_lRxoG4TIEmPyLBBx5axrFA47Z69AT0O6-LdF9Pnhn11bsC8ZCsA', // Replace with actual album link
  },

  {
    id: 18,
    name: "Budapest (HUN)",
    place: "HUNGARY",
    date: "Apr 24 - 27, 2022",
    imageurl: 'src/assets/TravelHungary.png', // Hungary flag
    description: 'Danube charm, thermal baths, and architectural splendor.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipN3Yrk69z30jCjXBo8HMGCwANdpcvaZlqaS1UddlQkQiXHVQ5yH8wnNfTujVV7Z8g', // Replace with actual album link
  },

  {
    id: 19,
    name: "Prague (CZE)",
    place: "CZECH REPUBLIC",
    date: "Apr 21 - 23, 2022",
    imageurl: 'src/assets/TravelCzechia.png', // Czech Republic flag
    description: 'Bohemian charm meets Gothic architecture in the heart of Europe.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipPOLxLWYp35Wfljoa3OflDlzEWoR2r8jc0VdrfQ-WMh4YGz_R71wPIWcbe7a8k61w', // Replace with actual album link
  },

  {
    id: 20,
    name: "Berlin (DEU)",
    place: "GERMANY",
    date: "Apr 18 - 20, 2022",
    imageurl: 'src/assets/TravelGermany.png', // Germany flag
    description: 'A vibrant cityscape of history, art, and modern innovation.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipPPV2BHilYB_jHHbHDLrrXeAvA2sfx88nky1DA8pQgGTCzpv1cbI9gl-GqyTrETXg', // Replace with actual album link
  },
  {
    id: 21,
    name: "Amsterdam, Rotterdam (NLD)",
    place: "NETHERLANDS",
    date: "Apr 14 - 18, 2023",
    imageurl: 'src/assets/TravelNetherlands.png', // Netherlands flag
    description: 'Canals, tulips, and a progressive spirit in the land of windmills.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipOid9NwaXNCbuVsecsT_EXQ29ADKL6WacwdlYDrJYnKy379oSPIUydrP2dx59hmLw', // Replace with actual album link
  },
  {
    id: 22,
    name: "Brussels (BEL)",
    place: "BELGIUM",
    date: "Apr 13 - 14, 2022",
    imageurl: 'src/assets/TravelBelgium.png', // Belgium flag
    description: 'Home to medieval towns, chocolate delights, and artistic legacies.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipNTvZpKhY8mSG801B9pRSIegY67H638MMaBc2LI563pyWYUMvswmoPNhHhNhjvoEw', // Replace with actual album link
  },

  {
    id: 23,
    name: "Lisbon, Porto, Braga, Cascais, Sintra (PRT)",
    place: "PORTUGAL",
    date: "Dec 15 - 28, 2018",
    imageurl: 'src/assets/TravelPortugal.png', // Portugal flag
    description: 'Portugal’s coast: from vibrant cities to historic fortresses.',
    photoAlbumLink: 'https://photos.google.com/share/AF1QipPg9B5thYv4-0Bfg1sgYAzKlgDb8v38_oXS94q1Omoa4LeYnYARVqDDe_NZO-xa4g', // Replace with actual album link
  },
  
  
  
  
  // Add more entries as needed
];

export default travelData;