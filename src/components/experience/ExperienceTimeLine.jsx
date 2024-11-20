
import Experiencedata from "./Experiencedata";
import { keyframes } from "styled-components";
import styled from "styled-components";

const slideHorizontal = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 20px;
  margin-bottom: 50px;
  margin-bottom: 50px;
  background:#191924;
`;

const Title = styled.h2`
  text-align: center;
  margin: 25px 0;
  color: white;
  font-size: 34px;
`;

const Description = styled.p`
  text-align: center;
  margin: 0 auto 15px;
  color: rgb(152, 155, 161);
  font-size: 18px;
  max-width: 600px;
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow-x: auto;
  padding: 30px 0;
  flex-wrap: nowrap;
`;

const Card = styled.div`
  width: 600px;
  max-width: 100%;
  border: 0.1px solid white;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: ${slideHorizontal} 1s ease-out forwards;
  background: rgb(176, 191, 206);
  color: black;
  border-radius: 60px;
  overflow: hidden;
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  width: 70px;
  height: 80px;
  background-color: #000;
  border-radius: 50%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Role = styled.h3`
  font-style: normal;
  color: black;
  margin-bottom: 8px;
  font-size: 20px;
`;

const Company = styled.h4`
  margin-bottom: 8px;
  font-size: 14px;
`;

const Duration = styled.p`
  font-size: 14px;
`;

const DescriptionList = styled.ul`
  font-size: 13px;
  list-style: none;
  padding-left: 20px;
`;

const Skills = styled.div`
  margin-top: 10px;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const SkillList = styled.ul`
  list-style: none;
  padding-left: 20px;
  font-size: 12px;
`;

function ExperienceTimeline() {
  return (
    <Container id="experience">
      <Title>Experience</Title>
      <Description>
        Below is a summary of my key roles and accomplishments during my 6-month
        internship, where I gained hands-on experience in software development,
        system testing, and IT instruction. This experience allowed me to apply
        academic knowledge in real-world projects and collaborate with
        professionals to enhance my technical skills.
      </Description>

      <TimelineSection>
        {Experiencedata.map((data) => (
          <Card key={data.id}>
            <Top>
              <Image src={data.img} alt={`${data.company} logo`} />
              <Body>
                <Role>{data.role}</Role>
                <Company>{data.company}</Company>
                <Duration>{data.date}</Duration>
              </Body>
            </Top>
            {data.desc && (
              <DescriptionList>
                {data.desc.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </DescriptionList>
            )}

            {data.skills && (
              <Skills>
                <strong>Skills:</strong>
                <SkillList>
                  {data.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </SkillList>
              </Skills>
            )}
          </Card>
        ))}
      </TimelineSection>
    </Container>
  );
}

export default ExperienceTimeline;
