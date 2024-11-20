/* eslint-disable react/prop-types */

import styled from "styled-components";
import ProjectData from "./ProjectData";

// Styled components for the project card
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
  padding: 20px;
  background: linear-gradient(135deg, #1e2028, #31353e);
  border-radius: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Adjust for tablets and small screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Stack the cards on very small screens */
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
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
  width: 100%; /* Ensure the image takes the full width of the card */
  height: auto; /* Maintain aspect ratio */
  max-height: 250px; /* Limit the image height */
  border-radius: 15px;
  object-fit: cover;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.1);
    filter: brightness(80%);
  }
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 5px;
`;

const TechTag = styled.span`
  background-color: ${({ type }) =>
    type === "frontend" ? "#00bcd4" : type === "backend" ? "#ff5722" : type === "database" ? "#8bc34a" : "#9e9e9e"};
  color: white;
  border-radius: 10px;
  padding: 5px 12px;
  font-size: 0.85rem;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: ${({ type }) =>
      type === "frontend" ? "#00bcd4" : type === "backend" ? "#ff5722" : type === "database" ? "#8bc34a" : "#9e9e9e"};
    border: 1px solid currentColor;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #82aaff;
  text-align: left;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    background-color: #82aaff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const DateText = styled.p`
  font-size: 0.9rem;
  color: rgb(150, 150, 150);
  margin: 0;
  text-align: left;
`;

const Description = styled.p`
  font-size: 0.8rem;
  color: rgb(194, 196, 198);
  text-align: left;
  line-height: 1.5;
`;

const Button = styled.a`
  background: linear-gradient(45deg, #82aaff, #91d1ff);
  color: white;
  padding: 12px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-grow: 1; /* Make buttons stretch to equal size */
  text-align: center; /* Center the text inside buttons */

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%; /* Make sure buttons are stretched */
  margin-top: 15px;

  @media (max-width: 480px) {
    flex-direction: column; /* Stack buttons on smaller screens */
    gap: 10px;
  }
`;

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
              <TechTag key={index} type={tech.toLowerCase()}>
                {tech}
              </TechTag>
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
