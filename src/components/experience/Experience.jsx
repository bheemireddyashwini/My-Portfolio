import styled, { keyframes } from "styled-components";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import Experiencedata from "./Experience";

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

const highlight = keyframes`
  0% {
    background-color: rgba(108, 99, 255, 0.1);
  }
  50% {
    background-color: rgba(108, 99, 255, 0.3);
  }
  100% {
    background-color: transparent;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 50px;
  background-color: #191924;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
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

const TimelineCard = styled.div`
  background: rgb(16, 23, 37);
  color: rgb(158, 155, 161);
  border-radius: 16px;
  padding: 24px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  background-color: #000;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const Role = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
`;

const Duration = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-top: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  margin-top: 10px;
  animation: ${fadeIn} 1s ease-in-out, ${highlight} 2s ease-in-out;
`;

const SkillList = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

function Experience() {
  const experience = Experiencedata;

  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          Below is a summary of my key roles and accomplishments, showcasing a
          diverse background in software development, system testing, IT
          instruction. These experiences reflect my commitment to technical
          excellence, team collaboration, and impactful contributions across
          various projects and industries.
        </Desc>

        <Timeline position="alternate">
          {experience.map((data, index) => (
            <TimelineItem key={data.id}>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "#6c63ff",
                    border: "2px solid #306EE8",
                  }}
                >
                  <img
                    src={data.img}
                    alt="Company logo"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </TimelineDot>
                {index < experience.length - 1 && (
                  <TimelineConnector
                    style={{ backgroundColor: "rgba(158, 155, 161, 0.5)" }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <TimelineCard>
                  <Top>
                    <Image src={data.img} alt="Company logo" />
                    <div>
                      <Role>{data.role}</Role>
                      <Duration>{data.date}</Duration>
                    </div>
                  </Top>
                  <Description>
                    {data.desc &&
                      data.desc.map((desc, idx) => <p key={idx}>{desc}</p>)}
                  </Description>
                  <Skills>
                    <b>Skills:</b>{" "}
                    {data.skills &&
                      data.skills.map((skill, idx) => (
                        <SkillList key={idx}>{skill}</SkillList>
                      ))}
                  </Skills>
                </TimelineCard>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Wrapper>
    </Container>
  );
}

export default Experience;
