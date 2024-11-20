import styled from "styled-components";
import ProjectData from "./ProjectData";

// Styled components for the project card
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 28px;

`;

const Card = styled.div`
  width: 100%;
  max-width: 500px;
  height: 450px;

  color: rgb(194, 196, 198);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: transparent;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    border: 5px solid #648bb4;
  }

  animation: slideIn 0.6s ease-out;

  @keyframes slideIn {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 80%;
  height: 50%;
  border-radius: 15px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 5px;
`;

const TechTag = styled.span`
  background-color: #191929;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #648bb4;
    color: white;
    border: 1px solid #648bb4;
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #6289b1;
  text-align: left;
  width: 100%; /* Full width to align with date */
`;

const DateText = styled.p`
  font-size: 0.9rem;
  color: rgb(150, 150, 150);
  margin: 0;
  text-align: left;
  width: 100%; /* Full width to align with title */
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: rgb(194, 196, 198);
  text-align: left;
  line-height: 1.5;
`;

const Button = styled.a`
  background-color: #6289b1;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: grey;
    transform: scale(1.05);
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
`;

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ toggle }) => {
  return (
    <CardsContainer>
      {ProjectData.filter(
        (project) => toggle === "all" || project.category === toggle
      ).map((project) => (
        <Card key={project.id}>
          <Image src={project.image} alt={project.title} />
          <TechContainer>
            {project.technologies.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </TechContainer>
          <Title>{project.title}</Title>
          <DateText>{project.date}</DateText>
          <Description>{project.description}</Description>
          <ButtonDiv>
            <Button href={project.link}>Demo</Button>
            <Button href={project.github}>Go to Repo</Button>
          </ButtonDiv>
        </Card>
      ))}
    </CardsContainer>
  );
};

export default ProjectCard;
