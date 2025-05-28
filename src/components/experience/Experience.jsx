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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #191924;
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;

  @media (max-width: 960px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimelineCard = styled.div`
  background: #101725;
  color: rgb(158, 155, 161);
  border-radius: 16px;
  padding: 24px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${fadeIn} 0.6s ease-in-out;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 12px;
  background-color: #000;

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const Role = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const Duration = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const Description = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Skills = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.span`
  background-color: rgba(108, 99, 255, 0.15);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 13px;
`;

function Experience() {
  const experience = Experiencedata;

  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          Below is a summary of my key roles and accomplishments, showcasing a
          diverse background in software development, system testing, and IT
          automation. These experiences reflect my commitment to technical
          excellence, team collaboration, and impactful contributions.
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
                      objectFit: "cover",
                    }}
                  />
                </TimelineDot>
                {index < experience.length - 1 && (
                  <TimelineConnector style={{ backgroundColor: "rgba(158, 155, 161, 0.5)" }} />
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
                    {data.desc.map((desc, idx) => (
                      <p key={idx}>{desc}</p>
                    ))}
                  </Description>
                  <Skills>
                    {data.skills.map((skill, idx) => (
                      <SkillTag key={idx}>{skill}</SkillTag>
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