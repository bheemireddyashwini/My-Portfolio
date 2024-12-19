import styled, { keyframes } from "styled-components"; // Importing styled-components and keyframes for animations
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab"; // Importing Material-UI components for the timeline structure
import Experiencedata from "./Experience"; // Importing the experience data from a separate file

// Defining keyframes for fadeIn animation when elements enter the screen
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

// Defining keyframes for the highlight effect animation
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

// Container for the entire experience section
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 50px;
  background-color: #191924; // Dark background color for the experience section
`;

// Wrapper for the content inside the Container
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

// Styled Title component that represents the header for the experience section
const Title = styled.div`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary}; // Using the theme color for primary text

  @media screen and (max-width: 960px) {
    font-size: 32px; // Reducing font size on smaller screens
    margin-top: 12px;
  }
`;

// Description component for explaining the experience section
const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary}; // Using the theme color for secondary text

  @media screen and (max-width: 768px) {
    font-size: 16px; // Adjusting font size for smaller screens
  }
`;

// Card component for individual timeline items (each work experience)
const TimelineCard = styled.div`
  background: rgb(16, 23, 37); // Dark background color for each card
  color: rgb(158, 155, 161); // Light text color
  border-radius: 16px; // Rounded corners for the card
  padding: 24px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px; // Light shadow for a floating effect
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px; // Space between each content element inside the card
`;

// Top section of the card that contains the company logo and role
const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; // Space between company logo and role information
`;

// Image component for the company logo
const Image = styled.img`
  height: 50px;
  width: 50px;
  background-color: #000;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 40px; // Adjusting the logo size on smaller screens
  }
`;

// Role section inside the card displaying the job title
const Role = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99}; // Primary text color for the role
`;

// Duration section displaying the time period of the experience
const Duration = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80}; // Secondary text color for duration
`;

// Description section for the detailed job description
const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99}; // Primary text color for description
  margin-top: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 12px; // Adjusting font size on smaller screens
  }
`;

// Skills section to display the skills used in the role with animations
const Skills = styled.div`
  margin-top: 10px;
  animation: ${fadeIn} 1s ease-in-out, ${highlight} 2s ease-in-out; // Applying fade-in and highlight animations
`;

// Skill list for displaying individual skills in the skills section
const SkillList = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99}; // Primary text color for skills

  @media only screen and (max-width: 768px) {
    font-size: 12px; // Adjusting font size for smaller screens
  }
`;

// The Experience component which renders the experience section
function Experience() {
  const experience = Experiencedata; // Fetching the experience data from the imported file

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

        {/* Timeline component from Material-UI to display experiences in a timeline format */}
        <Timeline position="alternate">
          {experience.map((data, index) => (
            <TimelineItem key={data.id}>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "#6c63ff", // Purple background for timeline dot
                    border: "2px solid #306EE8", // Blue border around the dot
                  }}
                >
                  <img
                    src={data.img}
                    alt="Company logo"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "50%", // Round image for the logo
                    }}
                  />
                </TimelineDot>
                {index < experience.length - 1 && (
                  <TimelineConnector
                    style={{ backgroundColor: "rgba(158, 155, 161, 0.5)" }} // Connector line between timeline items
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

export default Experience; // Exporting the Experience component for use elsewhere
