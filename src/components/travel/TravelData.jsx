// ---- image imports ----
import TravelHRV2 from '../assets/TravelHRV2.jpg';
import TravelBiH6 from '../assets/TravelBiH6.jpg';
import TravelUSA6 from '../assets/TravelUSA6.jpg';
import TravelUSA5 from '../assets/TravelUSA5.png';
import TravelUSA4 from '../assets/TravelUSA4.png';
import TravelUSA3 from '../assets/TravelUSA3.png';
import TravelUSA2 from '../assets/TravelUSA2.png';
import TravelCroatia2 from '../assets/TravelCroatia2.png';
import TravelGeorgia from '../assets/TravelGeorgia.png';
import TravelArmenia from '../assets/TravelArmenia.png';
import TravelSerbia from '../assets/TravelSerbia.png';
import TravelMontenegro from '../assets/TravelMontenegro.png';
import TravelCroatia1 from '../assets/TravelCroatia1.png';
import TravelBosnia2 from '../assets/TravelBosnia2.png';
import TravelMorocco from '../assets/TravelMorocco.png';
import TravelUSA1 from '../assets/TravelUSA1.png';
import TravelBritain from '../assets/TravelBritain.png';
import TravelFrance from '../assets/TravelFrance.png';
import TravelSwitzerland from '../assets/TravelSwitzerland.png';
import TravelItaly from '../assets/TravelItaly.png';
import TravelBosnia1 from '../assets/TravelBosnia1.png';
import TravelTurkey from '../assets/TravelTurkey.png';
import TravelHungary from '../assets/TravelHungary.png';
import TravelCzechia from '../assets/TravelCzechia.png';
import TravelGermany from '../assets/TravelGermany.png';
import TravelNetherlands from '../assets/TravelNetherlands.png';
import TravelBelgium from '../assets/TravelBelgium.png';
import TravelPortugal from '../assets/TravelPortugal.png';

// ---- data ----
const travelData = [
  {
    id: 1,
    name: "Mljet, Loviste, Korcula, Hvar (HRV)",
    place: "HRV #3",
    date: "AUG 30 - SEP 5, 2025",
    imageurl: TravelHRV2,
    description: "A journey of turquoise bays, sunlit islands, and history woven into every stone path.",
    photoAlbumLink: "https://photos.google.com/album/AF1QipPk7lhbt526c41eqYvY7o-DOOAVQodMRnFEl0d1",
  },
  {
    id: 2,
    name: "Sarajevo, Konjica, Trebinje (HRV)",
    place: "BIH #3",
    date: "AUG 26 - 30, 2025",
    imageurl: TravelBiH6,
    description: "Bridging East and West with mountains, rivers, and timeless stories of resilience.",
    photoAlbumLink: "https://photos.google.com/album/AF1QipO_4FUUozHy98czEwWRPPxIPYiUDHWKtsz-3n6r",
  },
  {
    id: 3,
    name: "Boston, Province Island (USA)",
    place: "USA #6",
    date: "AUG 1 - 8, 2025",
    imageurl: TravelUSA6,
    description: "A city of revolution and learning, where harbors, history, and culture meet daily.",
    photoAlbumLink: "https://photos.google.com/album/AF1QipPGCWhhNw6VoBLO2eDU-rxufyY30hR7dPitGPlT",
  },
  {
    id: 4,
    name: "Boston, MA (USA)",
    place: "USA #5",
    date: "DEC 22 - 30, 2024",
    imageurl: TravelUSA5,
    description: "Where Amerian history meets innovation, and every cobblestone tells a story.",
    photoAlbumLink: "https://photos.google.com/album/AF1QipOFh42C3p4To_LbxBaaOGXgnW-ndOy_rKeEWdu8",
  },
  {
    id: 5,
    name: "Maui, HW (USA)",
    place: "USA #4",
    date: "AUG 7 - 17, 2024",
    imageurl: TravelUSA4,
    description: "From the jungles to the beaches, an American tropical paradise.",
    photoAlbumLink: "https://photos.google.com/album/AF1QipMJ-169Z6Opuxg3dpGq2NMFRriEs2ftRFfFaewS",
  },
  {
    id: 6,
    name: "Palm Springs, CA (USA)",
    place: "USA #3",
    date: "May 20 - 30, 2024",
    imageurl: TravelUSA3,
    description: "Desert retreat with mid-century modern allure and natural beauty.",
    photoAlbumLink: "https://photos.google.com/album/AF1QipMc2_Xrhwyb1634OE5za3lIrlAWivqdheMF23EI",
  },
  {
    id: 7,
    name: "NYC, DC, Baltimore (USA)",
    place: "USA #2",
    date: "Dec 20, 2023 - Jan 4, 2024",
    imageurl: TravelUSA2,
    description: "American landmarks, political powerhouses, and East Coast charm.",
    photoAlbumLink: "https://photos.google.com/album/AF1QipNPtFeWV4z6qEm2LVV48mV3j1-9qjy1LgHM042p",
  },
  {
    id: 8,
    name: "Loviste, Orebic, Korcula (HRV)",
    place: "CROATIA #2",
    date: "Sep 5 - 17, 2023",
    imageurl: TravelCroatia2,
    description: "Sun-drenched islands and coastal towns steeped in history.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipPLjQy8pSjcfQzrzVV9F-tX1AXTZu9sSho01Wdoo_J4bwKs5S9fdpjUkBj_h7UzNQ",
  },
  {
    id: 9,
    name: "Tbilisi, Shida Kartli (GEO)",
    place: "GEORGIA",
    date: "Aug 27 - Sep 3, 2023",
    imageurl: TravelGeorgia,
    description: "Cultural crossroads of Caucasus charm and ancient traditions.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipNcQc4Zx1sRVB8lirT3FX8yyqnChGgmOJYx7gAHyKksM-0PtFI-l1cnAxMtdkyjew",
  },
  {
    id: 10,
    name: "Yerevan, Lusarat, Yeghegnadzor (ARM)",
    place: "ARMENIA",
    date: "Aug 22 - 27, 2023",
    imageurl: TravelArmenia,
    description: "Rich history and stunning landscapes await in this Eurasian gem.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipOckJc-hCFFogNIGlSWzi3GOD-FEoyrw-OWesQAZ9YXsv7rTbDqS5jn0J5P7u8x6g",
  },
  {
    id: 11,
    name: "Belgrade (SRB)",
    place: "SERBIA",
    date: "Aug 19 - 22, 2023",
    imageurl: TravelSerbia,
    description: "A dynamic blend of Slavic tradition and modern vibrancy.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipMRn0ijg6z5ZY1kbyTdAZ5DT15QBdmVwURO1gLphukQ82aJ7-lLtc8GtOV3AMfXtw",
  },
  {
    id: 12,
    name: "Kotor, Budva (MNE)",
    place: "MONTENEGRO",
    date: "Aug 1 - 10, 2023",
    imageurl: TravelMontenegro,
    description: "Montenegro’s coast: where Adriatic beauty meets medieval charm.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipPAp9zJ9iIwS9WFxm90YLjK4KQaee_SRR3-U3P0UB3UqDSC3nWhIqbrso1HIrGkFg",
  },
  {
    id: 13,
    name: "Dubrovnik (HRV)",
    place: "CROATIA #1",
    date: "Jul 27 - Aug 1, 2023",
    imageurl: TravelCroatia1,
    description: "Adriatic jewel with medieval walls, azure waters, and Mediterranean allure.",
    photoAlbumLink: "https://photos.google.com/album/AF1QipOaaZ8gKNeAhkSyz4-x0GAP0Qd7ES-qTWW4l62U",
  },
  {
    id: 14,
    name: "Sarajevo, Travnik, Jajice, Konjic, Donje Vakuv, etc. (BIH)",
    place: "BOSNIA & HERZEGOVINA #2",
    date: "Jun 29 - Sep 18, 2023",
    imageurl: TravelBosnia2,
    description: "Hidden treasures of natural beauty and historical intrigue.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipNC5jjf1Etq5cFMwmiCXg_e1Jqhl0vzCL1KNLm5LmSRH4dtRwZirc1xscAkNw39QQ",
  },
  {
    id: 15,
    name: "Casablanca, Rabat, Tangier, Chefchaoen, Marrakesh, etc. (MAR)",
    place: "MOROCCO",
    date: "Feb 20 - 28, 2023",
    imageurl: TravelMorocco,
    description: "Exotic souks, desert dunes, and a tapestry of Berber culture.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipOPj9VSNKtCFQjd-Pd1Ag9VNG-tRLdUpKFCRiFSXYMuy32s1XnedJ27CJAiuLkYQA?key=UTZ6bGhZRU9xY2JHQnNybXhmY3F2R2g4UnNocmlR",
  },
  {
    id: 16,
    name: "New York City, NY (USA)",
    place: "USA #1",
    date: "Sep 29 - Dec 31, 2022",
    imageurl: TravelUSA1,
    description: "The city that never sleeps: skyscrapers, culture, and culinary diversity.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipP6RvIbnXVHO_9r9gjlGp0tc_mr2t69XOX7ZmvGkw_16g0DwP5Qs75SmExLANVEPA",
  },
  {
    id: 17,
    name: "Oxford, London (UK)",
    place: "UNITED KINGDOM",
    date: "Apr 11 - May 19, 2022",
    imageurl: TravelBritain,
    description: "Iconic landmarks, literary history, and royal splendor.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipNWWOl1idiyX65Ev25tdF0GxPnxNPkVR-nBcuTGILjKySUP0eQwO5yLJMyaS2cR4A",
  },
  {
    id: 18,
    name: "Paris (FRA)",
    place: "FRANCE",
    date: "May 12 - 15, 2022",
    imageurl: TravelFrance,
    description: "The epitome of romance, art, and culinary excellence.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipNxqUUtz56E1iJTy15gYD8sLEnogBAO7m6ZrgIoyfp4tU34SF1kyXKeh71exPPByw",
  },
  {
    id: 19,
    name: "Zurich, Bern (CHE)",
    place: "SWITZERLAND",
    date: "May 10 - 12, 2022",
    imageurl: TravelSwitzerland,
    description: "Alpine landscapes, precision watches, and cultural richness.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipN5UJZ_9kjQLieDkW7AQDdHVdMiT4OkG6yIVNu2TIlfW6EuCZP6O8Qpdq9OSPyUew",
  },
  {
    id: 20,
    name: "Venice (ITA)",
    place: "ITALY",
    date: "May 8 - 11, 2022",
    imageurl: TravelItaly,
    description: "Canals, gondolas, and Renaissance grandeur in the City of Water.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipOvEKOUYXenvrCvYd4-QixRL-Zexaois_cpmB_Ckt2uAYTiEtnb6CSJka5kXiJWyA",
  },
  {
    id: 21,
    name: "Sarajevo, Mostar (BIH)",
    place: "BOSNIA & HERZEGOVIA #1",
    date: "May 22 - 27, 2023",
    imageurl: TravelBosnia1,
    description: "A blend of Ottoman and European cultures set against breathtaking vistas.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipP-PWvYG2vUuCMnDXwcPzxEQh8luLGp-96q8lro4N_ewnKeaPA2lRe2O6-VAzKjUg",
  },
  {
    id: 22,
    name: "Istanbul (TUR)",
    place: "TURKEY",
    date: "Apr 27 - May 1, 2022",
    imageurl: TravelTurkey,
    description: "East meets West in Istanbul: a city of minarets and markets.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipPs9olQh7chVy_lRxoG4TIEmPyLBBx5axrFA47Z69AT0O6-LdF9Pnhn11bsC8ZCsA",
  },
  {
    id: 23,
    name: "Budapest (HUN)",
    place: "HUNGARY",
    date: "Apr 24 - 27, 2022",
    imageurl: TravelHungary,
    description: "Danube charm, thermal baths, and architectural splendor.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipN3Yrk69z30jCjXBo8HMGCwANdpcvaZlqaS1UddlQkQiXHVQ5yH8wnNfTujVV7Z8g",
  },
  {
    id: 24,
    name: "Prague (CZE)",
    place: "CZECH REPUBLIC",
    date: "Apr 21 - 23, 2022",
    imageurl: TravelCzechia,
    description: "Bohemian charm meets Gothic architecture in the heart of Europe.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipPOLxLWYp35Wfljoa3OflDlzEWoR2r8jc0VdrfQ-WMh4YGz_R71wPIWcbe7a8k61w",
  },
  {
    id: 25,
    name: "Berlin (DEU)",
    place: "GERMANY",
    date: "Apr 18 - 20, 2022",
    imageurl: TravelGermany,
    description: "A vibrant cityscape of history, art, and modern innovation.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipPPV2BHilYB_jHHbHDLrrXeAvA2sfx88nky1DA8pQgGTCzpv1cbI9gl-GqyTrETXg",
  },
  {
    id: 26,
    name: "Amsterdam, Rotterdam (NLD)",
    place: "NETHERLANDS",
    date: "Apr 14 - 18, 2023",
    imageurl: TravelNetherlands,
    description: "Canals, tulips, and a progressive spirit in the land of windmills.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipOid9NwaXNCbuVsecsT_EXQ29ADKL6WacwdlYDrJYnKy379oSPIUydrP2dx59hmLw",
  },
  {
    id: 27,
    name: "Brussels (BEL)",
    place: "BELGIUM",
    date: "Apr 13 - 14, 2022",
    imageurl: TravelBelgium,
    description: "Home to medieval towns, chocolate delights, and artistic legacies.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipNTvZpKhY8mSG801B9pRSIegY67H638MMaBc2LI563pyWYUMvswmoPNhHhNhjvoEw",
  },
  {
    id: 28,
    name: "Lisbon, Porto, Braga, Cascais, Sintra (PRT)",
    place: "PORTUGAL",
    date: "Dec 15 - 28, 2018",
    imageurl: TravelPortugal,
    description: "Portugal’s coast: from vibrant cities to historic fortresses.",
    photoAlbumLink: "https://photos.google.com/share/AF1QipPg9B5thYv4-0Bfg1sgYAzKlgDb8v38_oXS94q1Omoa4LeYnYARVqDDe_NZO-xa4g",
  },
];

export default travelData;
