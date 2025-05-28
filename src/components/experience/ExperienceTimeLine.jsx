import Experiencedata from "./Experiencedata";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
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
  background: #191924;
  padding: 60px 20px;
`;

const Title = styled.h2`
  text-align: center;
  color: white;
  font-size: 34px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 40px;
  color: rgb(152, 155, 161);
  font-size: 18px;
  text-align: center;
`;

const TimelineSection = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px 0;

  &::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #5c7898; 
    border-radius: 2px;
  }
`;

const Card = styled.div`
  background: rgb(176, 191, 206);
  color: black;
  padding: 20px 30px;
  margin: 20px 0 20px 60px;
  position: relative;
  border-radius: 60px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  animation: ${fadeInUp} 0.8s ease forwards;
  opacity: 0;
  animation-fill-mode: forwards;

  &:hover {
    box-shadow: rgba(23, 92, 230, 0.3) 0px 8px 30px;
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }

  &::before {
    content: '';
    position: absolute;
    left: -40px;
    top: 25px;
    width: 16px;
    height: 16px;
    background:  #5c7898; 
    border-radius: 50%;
    border: 3px solid rgb(176, 191, 206);
  }
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Image = styled.img`
  width: 70px;
  height: 80px;
  background-color: #000;
  border-radius: 50%;
  object-fit: cover;
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
  color: black;
`;

const Duration = styled.p`
  font-size: 14px;
  color: black;
`;

const DescriptionList = styled.ul`
  font-size: 13px;
  list-style: disc inside;
  padding-left: 20px;
  margin-top: 12px;
  color: black;
`;

const Skills = styled.div`
  margin-top: 12px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding-left: 0;
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 6px;
`;

const Skill = styled.li`
  background:  #5c7898; 
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
`;

function ExperienceTimeline() {
  return (
    <Container id="experience">
      <Title>Experience</Title>
      <Description>
        Below is an overview of my key roles and achievements during my internships, where I gained valuable hands-on experience in software development, system testing, and IT training. These opportunities helped me apply my academic knowledge to practical projects, collaborate with professionals, and grow my technical expertise.
      </Description>

      <TimelineSection>
        {Experiencedata.map((data, index) => (
          <Card key={data.id} style={{ animationDelay: `${index * 0.2}s` }}>
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
                {data.desc.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </DescriptionList>
            )}

            {data.skills && (
              <Skills>
                <strong>Skills:</strong>
                <SkillList>
                  {data.skills.map((skill, idx) => (
                    <Skill key={idx}>{skill}</Skill>
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
