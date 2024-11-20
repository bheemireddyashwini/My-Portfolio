import styled from "styled-components";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Container = styled.div`
  background: #191924;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 90%;
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1.5s ease-out;

  @media screen and (max-width: 960px) {
    font-size: 36px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 700px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  animation: slideIn 1.5s ease-out;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 2px solid rgba(98, 137, 177, 0.7);
  border-radius: 20px;
  overflow: hidden;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.1);
`;

const ToggleButton = styled.div`
  padding: 12px 20px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${({ active }) => (active ? '#648bb4' : 'transparent')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #648bb4;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: rgba(98, 137, 177, 0.7);
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 20px;
  animation: fadeInUp 1.5s ease-out;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function Projects() {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Innovations</Title>
        <Desc>
          Take a look at the key projects I completed using the MERN stack during my web development course.
        </Desc>
        <ToggleGroup>
          <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}>All</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === "javascript"} onClick={() => setToggle("javascript")}>JAVASCRIPT</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === "react"} onClick={() => setToggle("react")}>REACT</ToggleButton>
        </ToggleGroup>
        <CardContainer>
          <ProjectCard toggle={toggle} />
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default Projects;
