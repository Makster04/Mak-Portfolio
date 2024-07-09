import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";

const AccordionComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const continents = [
    {
      name: "Asia",
      content: "Content for Asia goes here.",
    },
    {
      name: "Europe",
      content: "Content for Europe goes here.",
    },
    {
      name: "Africa",
      content: "Content for Africa goes here.",
    },
    {
      name: "North America",
      content: "Content for North America goes here.",
    },
    {
      name: "South America",
      content: "Content for South America goes here.",
    },
  ];

  const handleAccordionClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? 1 : index;
    setActiveIndex(newIndex);
  };

  return (
    <Accordion styled>
      {continents.map((continent, index) => (
        <div key={index}>
          <Accordion.Title
            active={activeIndex === index}
            index={index}
            onClick={handleAccordionClick}
          >
            <Icon name="dropdown" />
            {continent.name}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            <p>{continent.content}</p>
          </Accordion.Content>
        </div>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
