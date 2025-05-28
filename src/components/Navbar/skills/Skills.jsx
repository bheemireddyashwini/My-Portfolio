import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi"; // For arrow icon
import Skilldata from "./Skilldata";

const Container = styled.div`
  background-color: #191924;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
`;

const Wrapper = styled.div`
  max-width: 900px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-bottom: 40px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SkillCard = styled.div`
  background: #101725;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(23, 92, 230, 0.2);
  overflow: hidden;
`;

const SkillHeader = styled.div`
  padding: 20px 25px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 600;
  font-size: 26px;

  &:hover {
    background-color: #16203a;
  }
`;

const IconWrapper = styled.div`
  transition: transform 0.3s ease;
  transform: rotate(${props => (props.open ? "180deg" : "0deg")});
  color: #39a0ff;
`;

const SkillContent = styled.div`
  max-height: ${props => (props.open ? "1000px" : "0")};
  opacity: ${props => (props.open ? 1 : 0)};
  padding: ${props => (props.open ? "20px 25px" : "0 25px")};
  transition: max-height 0.5s ease, opacity 0.4s ease, padding 0.4s ease;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  background: #2b2f47;
  border-radius: 6px;
  height: 8px;
  margin-bottom: 20px;
`;

const Progress = styled.div`
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  background: #39a0ff;
  border-radius: 6px;
  transition: width 0.5s ease;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillItem = styled.div`
  background: #1f2740;
  padding: 8px 14px;
  border-radius: 12px;
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary + "cc"};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: default;

  &:hover {
    background-color: #2b3353;
  }
`;

const SkillImage = styled.img`
  width: 22px;
  height: 22px;
`;

const SkillName = styled.div``;

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
            <SkillCard key={index}>
              <SkillHeader onClick={() => toggleOpen(index)}>
                {item.title}
                <IconWrapper open={open === index}>
                  <FiChevronDown size={24} />
                </IconWrapper>
              </SkillHeader>
              <SkillContent open={open === index}>
                <ProgressBar>
                  <Progress percentage={item.proficiency || 80} />
                </ProgressBar>
                <SkillList>
                  {item.skills.map((skill, i) => (
                    <SkillItem key={i}>
                      <SkillImage src={skill.image} alt={skill.name} />
                      <SkillName>{skill.name}</SkillName>
                    </SkillItem>
                  ))}
                </SkillList>
              </SkillContent>
            </SkillCard>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
}

export default Skills;
