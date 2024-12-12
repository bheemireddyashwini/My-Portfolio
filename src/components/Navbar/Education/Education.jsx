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

// Wrapper for the entire section
const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #191924;  /* Background color for the section */
  
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
  color: #fff;
  margin: 0;
  letter-spacing: -0.5px;

  @media (max-width: 375px) {
    font-size: 28px;
  }
`;

const SubText = styled.p`
  font-size: 18px;
  color: #7f8c8d;  /* Soft gray for the description text */
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
  background: #191924;
  color: #2c3e50;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  border: 2px solid #2c3e50;

  &:hover, &:focus {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3), 0 0 15px 5px rgba(135, 206, 235, 0.6); /* Sky-blue shadow */
  }

  /* Animation for the card to slide from left to right */
  animation: ${slideInFromLeft} 0.6s ease-out forwards;

  /* Delay the animation for each card to create a staggered effect */
  animation-delay: ${({ delay }) => delay || "0s"};

  @media (max-width: 768px) {
    margin: 15px;
  }

  @media (min-width: 1440px) {
    max-width: 320px;
  }
`;

const SchoolLogo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
`;

const SchoolName = styled.h3`
  font-size: 20px;
  color: #16a085;  /* Teal color for school names */
  margin: 10px 0;
  letter-spacing: -0.5px;
`;

const DateText = styled.p`
  font-size: 14px;
  color: #95a5a6;  /* Soft gray for dates */
  margin: 5px 0;
  letter-spacing: -0.5px;
`;

const Description = styled.p`
  font-size: 15px;
  color: #7f8c8d;  
  text-align: center;
  line-height: 1.4;
  margin-top: 10px;
  margin-bottom: 15px;
  letter-spacing: -0.3px;
  word-spacing: -0.3px;
`;

const Degree = styled.p`
  font-size: 14px;
  color: skyblue;  /* Pink for the degree text */
  margin-top: 10px;
  font-style: italic;
  letter-spacing: -0.5px;
  font-weight: 600;
`;

function Education() {
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
