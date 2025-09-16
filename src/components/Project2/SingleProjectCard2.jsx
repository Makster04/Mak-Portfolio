import { Button, Card, Image } from "semantic-ui-react";
import { BsGithub } from "react-icons/bs";
import "./Project2.css";

const SingleProjectCard = ({ projectDetails }) => {
  const { title, about, role, languages, image, projectLink } = projectDetails;

  return (
    <Card className="single-card2">
      <Image className="projectCard-image2" src={image} wrapped ui={false} />
      <Card.Content className="single-card-content2">
        <Card.Header as="h2">{title}</Card.Header>
        <Card.Description>
          <p><strong>About:</strong> {about}</p>
          <p><strong>Role:</strong> {role}</p>
          {languages && (
            <p><strong>Languages:</strong> {languages}</p>
          )}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={projectLink}>
          <Button className="single-card-button2">
            <div className="github-button2">
              <BsGithub style={{ marginRight: "1rem" }} /> Link
            </div>
          </Button>
        </a>
      </Card.Content>
    </Card>
  );
};

export default SingleProjectCard;
