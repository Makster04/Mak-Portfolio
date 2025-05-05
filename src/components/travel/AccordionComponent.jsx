import React from "react";
import { Accordion, Icon } from "semantic-ui-react";

const AccordionComponent = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [subActiveIndex, setSubActiveIndex] = React.useState({});

  const continents = [
    {
      name: "Asia",
      content: [
        { name: "ARMENIA", emoji: "🇦🇲" },
        { name: "GEORGIA", emoji: "🇬🇪" },
        { name: "INDIA", emoji: "🇮🇳" },
        { name: "TURKEY", emoji: "🇹🇷" },
        { name: "THAILAND", emoji: "🇹🇭" },
      ],
    },
    {
      name: "Europe",
      content: [
        { name: "BOSNIA & HERZEGOVINA", emoji: "🇧🇦" },
        { name: "BELGIUM", emoji: "🇧🇪" },
        { name: "CROATIA", emoji: "🇭🇷" },
        { name: "CZECH REPUBLIC", emoji: "🇨🇿" },
        { name: "GERMANY", emoji: "🇩🇪" },
        { name: "HUNGARY", emoji: "🇭🇺" },
        { name: "ITALY", emoji: "🇮🇹" },
        { name: "NETHERLANDS", emoji: "🇳🇱" },
        { name: "PORTUGAL", emoji: "🇵🇹" },
        { name: "SWITZERLAND", emoji: "🇨🇭" },
        { name: "UNITED KINGDOM", emoji: "🇬🇧" },
        { name: "MONTENEGRO", emoji: "🇲🇪" },
        { name: "SERBIA", emoji: "🇷🇸" },
      ],
    },
    {
      name: "Africa",
      content: [{ name: "MOROCCO", emoji: "🇲🇦" }],
    },
    {
      name: "North America",
      content: [
        { name: "USA", emoji: "🇺🇸" },
        { name: "CANADA", emoji: "🇨🇦" },
        { name: "MEXICO", emoji: "🇲🇽" },
      ],
    },
    {
      name: "South America",
      content: [{ name: "N/A", emoji: "" }],
    },
  ];

  const handleAccordionClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  const handleSubAccordionClick = (continentIndex, e, titleProps) => {
    const { index } = titleProps;
    const currentSubActiveIndex = subActiveIndex[continentIndex] || 0;
    const newIndex = currentSubActiveIndex === index ? -1 : index;

    setSubActiveIndex({
      ...subActiveIndex,
      [continentIndex]: newIndex,
    });
  };

  return (
    <Accordion fluid styled>
      {continents.map((continent, continentIndex) => (
        <React.Fragment key={continentIndex}>
          <Accordion.Title
            active={activeIndex === continentIndex}
            index={continentIndex}
            onClick={handleAccordionClick}
          >
            <Icon name="dropdown" />
            {continent.name}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === continentIndex}>
            <Accordion fluid styled>
              {continent.content.map((country, countryIndex) => (
                <React.Fragment key={countryIndex}>
                  <Accordion.Title
                    active={subActiveIndex[continentIndex] === countryIndex}
                    index={countryIndex}
                    onClick={(e, titleProps) =>
                      handleSubAccordionClick(continentIndex, e, titleProps)
                    }
                    style={{
                      fontFamily: "'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif",
                    }}
                  >
                    <Icon name="dropdown" />
                    {country.emoji} {country.name}
                  </Accordion.Title>
                  <Accordion.Content active={subActiveIndex[continentIndex] === countryIndex}>
                    <p>
                      Placeholder for detailed content about {country.name} visited.
                    </p>
                  </Accordion.Content>
                </React.Fragment>
              ))}
            </Accordion>
          </Accordion.Content>
        </React.Fragment>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
