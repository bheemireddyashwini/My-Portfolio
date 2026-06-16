import Experiencedata from "./Experiencedata";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.section`
  background: ${({ theme }) => theme.bg};
  padding: 72px 20px;
`;

const Wrapper = styled.div`
  max-width: 1160px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 28px;
`;

const Title = styled.h2`
  font-size: clamp(1.9rem, 4vw, 2.8rem);
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

const Description = styled.p`
  max-width: 780px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  font-size: 1rem;
`;

const List = styled.div`
  display: grid;
  gap: 14px;
`;

const Item = styled.article`
  display: grid;
  grid-template-columns: 84px minmax(0, 1fr);
  gap: 18px;
  padding: 18px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.border};
  background: linear-gradient(170deg, ${({ theme }) => theme.card_light}, ${({ theme }) => theme.card});
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.12);
  animation: ${fadeInUp} 0.45s ease forwards;
  opacity: 0;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(57, 160, 237, 0.56);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 16px;
  }

  @media (max-width: 640px) {
    padding: 14px;
  }
`;

const Marker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100%;
  padding-top: 2px;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
    min-height: auto;
    padding-top: 0;
  }
`;

const LogoWrap = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  background: #0f1727;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    border-radius: 14px;
  }
`;

const Line = styled.div`
  width: 2px;
  min-height: 22px;
  flex: 1;
  margin-top: 10px;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(57, 160, 237, 0.72),
    rgba(57, 160, 237, 0.1)
  );

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  min-width: 0;
`;

const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 6px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Role = styled.h3`
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.05rem;
  line-height: 1.35;
  margin-bottom: 3px;
`;

const Meta = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.86rem;
  margin: 0;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.74rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  background: rgba(57, 160, 237, 0.12);
  border: 1px solid rgba(57, 160, 237, 0.22);
  white-space: nowrap;
`;

const Specialization = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.88rem;
  line-height: 1.6;
`;

const DescriptionList = styled.ul`
  margin: 10px 0 0;
  padding-left: 18px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.65;
  font-size: 0.93rem;

  li + li {
    margin-top: 8px;
  }
`;

const Skills = styled.div`
  margin-top: 12px;
`;

const SkillsLabel = styled.div`
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 8px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.span`
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.border};
  background: rgba(255, 255, 255, 0.03);
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.78rem;
  font-weight: 600;
`;

function ExperienceTimeline() {
  return (
    <Container id="experience">
      <Wrapper>
        <Header>
          <Title>Experience</Title>
          <Description>
            A clean overview of my current frontend role and previous internship
            experience, styled in a LinkedIn-like format for easy reading.
          </Description>
        </Header>

        <List>
          {Experiencedata.map((data, index) => (
            <Item
              key={`${data.id}-${index}`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <Marker aria-hidden="true">
                <LogoWrap>
                  <Logo src={data.img} alt={`${data.company} logo`} />
                </LogoWrap>
                {index < Experiencedata.length - 1 ? <Line /> : null}
              </Marker>

              <Content>
                <TopRow>
                  <div>
                    <Role>{data.role}</Role>
                    <Meta>
                      {data.company}
                      {data.location ? ` · ${data.location}` : ""}
                      {data.date ? ` · ${data.date}` : ""}
                    </Meta>
                  </div>

                  {data.current ? <Badge>Current</Badge> : null}
                </TopRow>

                {data.desc ? (
                  <DescriptionList>
                    {data.desc.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </DescriptionList>
                ) : null}

                {data.specialization ? (
                  <Specialization>
                    <strong>Specialization:</strong> {data.specialization}
                  </Specialization>
                ) : null}

                {data.skills ? (
                  <Skills>
                    <SkillsLabel>Skills</SkillsLabel>
                    <SkillList>
                      {data.skills.map((skill, idx) => (
                        <Skill key={idx}>{skill}</Skill>
                      ))}
                    </SkillList>
                  </Skills>
                ) : null}
              </Content>
            </Item>
          ))}
        </List>
      </Wrapper>
    </Container>
  );
}

export default ExperienceTimeline;
