import { useState } from "react";
import styled, { keyframes } from "styled-components";
import EducationData from "./EducationData";

// Animation for the card to come from the left to right
const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #12121a;

  @media (min-width: 768px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const EducationHeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 0 20px;
`;

const Header = styled.h2`
  font-size: 36px;
  color: #f0f0f0;
  margin: 0;
  letter-spacing: -0.5px;

  @media (max-width: 375px) {
    font-size: 28px;
  }
`;

const SubText = styled.p`
  font-size: 18px;
  color: #a0a0a0;
  margin-top: 10px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: -0.5px;
  word-spacing: -0.5px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  justify-items: center;
  width: 100%;
  margin-top: 30px;
`;

const EducationCard = styled.div`
  background: rgba(25, 25, 36, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform: translateX(-100%);
  opacity: 0;
  animation: ${slideInFromLeft} 0.6s ease-out forwards;
  animation-delay: ${({ delay }) => delay || "0s"};
  transition: box-shadow 0.3s ease; /* removed transform transition */
  cursor: default;
  user-select: none;

  &:hover,
  &:focus {
    /* Removed scale effect */
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3),
      0 0 15px 5px rgba(0, 255, 255, 0.3);
    outline: none;
  }
`;

const SchoolLogo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
  border: 2px solid #00ffff33;
`;

const SchoolName = styled.h3`
  font-size: 20px;
  background: linear-gradient(90deg, #16a085, #1abc9c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 10px 0;
  letter-spacing: -0.5px;
`;

const DateText = styled.p`
  font-size: 14px;
  color: #95a5a6;
  margin: 5px 0;
  letter-spacing: -0.5px;
`;

const Description = styled.p`
  font-size: 15px;
  color: #c0c0c0;
  text-align: center;
  line-height: 1.5;
  margin-top: 10px;
  margin-bottom: 15px;
  letter-spacing: -0.3px;
  word-spacing: -0.3px;

  max-height: none;
  overflow: visible;
  position: static;
`;

const Degree = styled.p`
  font-size: 14px;
  color: #87cefa;
  margin-top: 10px;
  font-style: italic;
  letter-spacing: -0.5px;
  font-weight: 600;
`;

function Education() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <EducationWrapper id="education">
      <EducationHeaderWrapper>
        <Header>Education</Header>
        <SubText>
          Take a closer look at my academic background and the milestones that
          define my journey in education.
        </SubText>
      </EducationHeaderWrapper>

      <CardGrid>
        {EducationData.map((data, index) => (
          <EducationCard key={data.id} delay={`${index * 0.2}s`}>
            <SchoolLogo src={data.img} alt={`${data.school} logo`} />
            <SchoolName>{data.school}</SchoolName>
            <DateText>{data.date}</DateText>
            <Description>{data.desc}</Description>
            <Degree>{data.degree}</Degree>
          </EducationCard>
        ))}
      </CardGrid>
    </EducationWrapper>
  );
}

export default Education;
