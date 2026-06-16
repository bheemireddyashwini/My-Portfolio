import styled from "styled-components";
import Bio from "../Navbar/Herosection/Bio";

const Section = styled.section`
  padding: 72px 20px 90px;
`;

const Wrapper = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  background: linear-gradient(160deg, ${({ theme }) => theme.card_light}, ${({ theme }) => theme.card});
  padding: 30px 24px;
`;

const Title = styled.h2`
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  margin-bottom: 8px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
  max-width: 730px;
  margin-bottom: 18px;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const LinkButton = styled.a`
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  background: rgba(255, 255, 255, 0.03);
  color: ${({ theme }) => theme.white};
  padding: 10px 14px;
  font-weight: 700;
  font-size: 0.9rem;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;

function Contact() {
  const linkedin = Bio.linkedin.startsWith("http")
    ? Bio.linkedin
    : `https://${Bio.linkedin}`;

  return (
    <Section id="contact">
      <Wrapper>
        <Title>Let&apos;s Work Together</Title>
        <Text>
          I am open to full-time roles, internships, and freelance opportunities.
          If you have an idea or a position in mind, feel free to reach out.
        </Text>
        <Links>
          <LinkButton href={Bio.github} target="_blank" rel="noreferrer">
            GitHub
          </LinkButton>
          <LinkButton href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </LinkButton>
          <LinkButton href={Bio.resume} target="_blank" rel="noreferrer">
            Resume
          </LinkButton>
        </Links>
      </Wrapper>
    </Section>
  );
}

export default Contact;
