import styled, { keyframes } from "styled-components";
import EducationData from "./EducationData";

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const EducationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(56px, 7vw, 72px) clamp(16px, 3vw, 20px);
  background: ${({ theme }) => theme.bg};
`;

const EducationHeaderWrapper = styled.div`
  width: 100%;
  max-width: 1160px;
  text-align: center;
  margin-bottom: 28px;
`;

const Header = styled.h2`
  font-size: clamp(1.9rem, 4vw, 2.7rem);
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const SubText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 10px;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
`;

const Timeline = styled.div`
  width: 100%;
  max-width: 1160px;
  position: relative;
  padding-left: 34px;

  &::before {
    content: "";
    position: absolute;
    left: 14px;
    top: 4px;
    bottom: 4px;
    width: 2px;
    background: linear-gradient(
      180deg,
      rgba(57, 160, 237, 0.05),
      rgba(57, 160, 237, 0.85),
      rgba(57, 160, 237, 0.05)
    );
    border-radius: 999px;
  }

  @media screen and (max-width: 640px) {
    padding-left: 24px;

    &::before {
      left: 10px;
    }
  }
`;

const TimelineItem = styled.article`
  position: relative;
  padding-bottom: 28px;

  &:last-child {
    padding-bottom: 0;
  }

  @media screen and (max-width: 640px) {
    padding-bottom: 20px;
  }
`;

const TimelineDot = styled.span`
  position: absolute;
  left: -34px;
  top: 26px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 0 6px rgba(57, 160, 237, 0.12);
  border: 2px solid ${({ theme }) => theme.bg};

  @media screen and (max-width: 640px) {
    left: -24px;
    top: 22px;
    width: 14px;
    height: 14px;
    box-shadow: 0 0 0 5px rgba(57, 160, 237, 0.12);
  }
`;

const EducationCard = styled.div`
  background: linear-gradient(
    165deg,
    ${({ theme }) => theme.card_light},
    ${({ theme }) => theme.card}
  );
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 18px;
  padding: 22px;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  animation: ${fadeUp} 0.5s ease-out forwards;
  animation-delay: ${({ delay }) => delay || "0s"};
  opacity: 0;
  transition: transform 0.2s ease, border-color 0.2s ease;

  @media screen and (min-width: 768px) {
    padding: 24px 26px;
  }

  @media screen and (max-width: 640px) {
    padding: 18px;
  }

  &:hover,
  &:focus {
    transform: translateY(-6px);
    border-color: rgba(57, 160, 237, 0.55);
    outline: none;
  }
`;

const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  @media screen and (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
`;

const SchoolLogo = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.border};
  background: #0f1727;

  @media screen and (max-width: 480px) {
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }
`;

const SchoolName = styled.h3`
  font-size: clamp(0.98rem, 2vw, 1rem);
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const DateText = styled.p`
  font-size: clamp(0.78rem, 1.8vw, 0.82rem);
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const Description = styled.p`
  font-size: clamp(0.9rem, 2vw, 0.93rem);
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.65;
  margin-bottom: 12px;
`;

const Degree = styled.p`
  margin-top: auto;
  font-size: clamp(0.78rem, 1.8vw, 0.82rem);
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
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

      <Timeline>
        {EducationData.map((data, index) => (
          <TimelineItem key={data.id}>
            <TimelineDot aria-hidden="true" />
            <EducationCard delay={`${index * 0.2}s`}>
              <HeaderRow>
                <SchoolLogo src={data.img} alt={`${data.school} logo`} />
                <div>
                  <SchoolName>{data.school}</SchoolName>
                  <DateText>{data.date}</DateText>
                </div>
              </HeaderRow>
              <Description>{data.desc}</Description>
              <Degree>{data.degree}</Degree>
            </EducationCard>
          </TimelineItem>
        ))}
      </Timeline>
    </EducationWrapper>
  );
}

export default Education;
