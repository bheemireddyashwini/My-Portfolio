/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import styled from "styled-components";
import Skilldata from "./Skilldata"; 

const Container = styled.div`
  background-color: #191924;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 960px) {
    font-size: 32px;
    margin-top: 12px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 30px;
`;

const Skill = styled.div`
  background-color: #101725;
  border: 2px solid #a6e0ff;
  border-radius: 16px;
  padding: 18px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  opacity: 0;
  animation: fadeIn 1s forwards;
  animation-delay: ${({ index }) =>
    `${index * 0.2}s`}; /* Delay for each skill box */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(23, 92, 230, 0.3) 0px 8px 32px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-bottom: 12px;
`;

const SkillContent = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  margin-top: 10px;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #0b151e;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const SkillName = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e6e6e6;
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 2px;
`;

const Progress = styled.div`
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  background-color: #a6e0ff;
  border-radius: 4px;
  transition: width 0.5s ease;
`;

function Skills() {
  const [open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <Container id="skills">
      <Wrapper>
        <Title>Tech Proficiency</Title>
        <Desc>
          My path to Full Stack Developer has refined a variety of skills. Here
          are some of the technologies I&apos;ve worked with:
        </Desc>
        <SkillsContainer>
          {Skilldata.map((item, index) => (
            <Skill key={index} index={index} onClick={() => toggleOpen(index)}>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillContent open={open === index}>
                <ProgressBar>
                  <Progress percentage={item.proficiency || 80} />
                </ProgressBar>
                <SkillList>
                  {item.skills.map((skill, index) => (
                    <SkillItem key={index}>
                      <SkillImage src={skill.image} alt={skill.name} />
                      <SkillName>{skill.name}</SkillName>
                    </SkillItem>
                  ))}
                </SkillList>
              </SkillContent>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
}

export default Skills;
