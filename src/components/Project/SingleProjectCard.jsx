import React from "react";
import { Button, Card, Image, List } from "semantic-ui-react";
import { BsGithub } from "react-icons/bs";
import "./Project.css"

const SingleProjectCard = ({ projectDetails }) => {
  const { title, about, role, languages, image, projectLink } = projectDetails;

  return (
    <Card className="single-card">
      <Image className="projectCard-image" src={image} wrapped ui={false} />
      <Card.Content className="single-card-content">
        <Card.Header style={{ fontSize: "2rem" }}>{title}</Card.Header>
        <Card.Description style={{ fontSize: "1.2rem", textAlign: "left" }}>
          <p><strong>About:</strong> {about}</p>
          <p><strong>Role:</strong> {role}</p>
          {languages && (
            <p><strong>Languages:</strong> {languages}</p>
          )}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={projectLink}>
          <Button className="single-card-button">
            <div className="github-button">
              <BsGithub style={{ marginRight: "1rem" }} /> Github Link
            </div>
          </Button>
        </a>
      </Card.Content>
    </Card>
  );
};

export default SingleProjectCard;