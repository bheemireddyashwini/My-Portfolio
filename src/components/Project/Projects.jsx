import styled from "styled-components";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Container = styled.section`
  padding: 70px 20px;
`;

const Wrapper = styled.div`
  max-width: 1160px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(1.9rem, 4vw, 2.7rem);
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const Desc = styled.p`
  max-width: 760px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
`;

const ToggleGroup = styled.div`
  display: inline-flex;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 999px;
  overflow: hidden;
  margin: 24px 0;
  background: rgba(255, 255, 255, 0.02);
`;

const ToggleButton = styled.button`
  border: none;
  background: ${({ active, theme }) =>
    active ? `linear-gradient(135deg, ${theme.primary}, #2f6a96)` : "transparent"};
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  padding: 10px 16px;
  cursor: pointer;

  @media screen and (max-width: 560px) {
    padding: 9px 12px;
    font-size: 0.85rem;
  }
`;

const CardContainer = styled.div`
  margin-top: 8px;
`;

function Projects() {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Selected Projects</Title>
        <Desc>
          A collection of practical web projects focused on usability,
          responsiveness, and clear product thinking.
        </Desc>

        <ToggleGroup>
          <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}>
            All
          </ToggleButton>
          <ToggleButton
            active={toggle === "javascript"}
            onClick={() => setToggle("javascript")}
          >
            JavaScript
          </ToggleButton>
          <ToggleButton active={toggle === "react"} onClick={() => setToggle("react")}>
            React
          </ToggleButton>
        </ToggleGroup>

        <CardContainer>
          <ProjectCard toggle={toggle} />
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default Projects;
