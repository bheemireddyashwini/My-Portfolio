/* eslint-disable react/prop-types */

import styled from "styled-components";
import ProjectData from "./ProjectData";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const Card = styled.article`
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  background: linear-gradient(180deg, ${({ theme }) => theme.card_light}, ${({ theme }) => theme.card});
  transition: transform 0.22s ease, border-color 0.22s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(57, 160, 237, 0.58);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
`;

const TechTag = styled.span`
  background: rgba(57, 160, 237, 0.15);
  color: ${({ theme }) => theme.text_secondary};
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 4px 10px;
  font-size: 0.74rem;
  font-weight: 700;
`;

const Title = styled.h3`
  font-size: 1.16rem;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 5px;
`;

const DateText = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 9px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.55;
  font-size: 0.9rem;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 14px;
`;

const Button = styled.a`
  text-decoration: none;
  flex: 1;
  text-align: center;
  border-radius: 10px;
  font-size: 0.86rem;
  font-weight: 700;
  padding: 10px 12px;
  border: 1px solid ${({ primary, theme }) => (primary ? theme.primary : theme.border)};
  color: ${({ theme }) => theme.white};
  background: ${({ primary, theme }) =>
    primary ? `linear-gradient(135deg, ${theme.primary}, #2f6a96)` : "transparent"};

  &:hover {
    opacity: 0.92;
  }
`;

const ProjectCard = ({ toggle }) => {
  const filtered = ProjectData.filter(
    (project) => toggle === "all" || project.category === toggle
  );

  return (
    <CardsContainer>
      {filtered.map((project) => (
        <Card key={project.id}>
          <Image src={project.image} alt={project.title} loading="lazy" />
          <Content>
            <TechContainer>
              {project.technologies.slice(0, 5).map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </TechContainer>
            <Title>{project.title}</Title>
            <DateText>{project.date}</DateText>
            <Description>{project.description}</Description>
            <ButtonRow>
              <Button href={project.link} target="_blank" rel="noreferrer" primary>
                Live Demo
              </Button>
              <Button href={project.github} target="_blank" rel="noreferrer">
                Source
              </Button>
            </ButtonRow>
          </Content>
        </Card>
      ))}
    </CardsContainer>
  );
};

export default ProjectCard;
