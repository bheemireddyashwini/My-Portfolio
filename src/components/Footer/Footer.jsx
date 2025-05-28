import styled, { keyframes } from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaGithub } from "react-icons/fa";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const waveAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

// Container
const FooterContainer = styled.footer`
  position: relative;
  background: rgb(90, 115, 146);
  color: white;
  padding: 4rem 2rem 2rem;
  overflow: hidden;
`;

// Inner layout
const FooterGrid = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (min-width: 640px) {
    grid-template-columns: 1fr auto;
    text-align: left;
    align-items: center;
  }
`;

// Logo
const Logo = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
`;

// Social icons
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 640px) {
    justify-content: flex-end;
  }
`;

const IconLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding: 0.6rem;
  color: white;
  font-size: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    color: #ffae42;
  }
`;

// Copyright
const Copyright = styled.p`
  font-size: 0.85rem;
  color: #d1d5db;
  text-align: center;
  margin-top: 2rem;
`;

// Waves
const WaveWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 80px;
  overflow: hidden;
  pointer-events: none;
`;

const Wave = styled.svg`
  position: absolute;
  width: 200%;
  height: 100%;
  animation: ${waveAnimation} 20s linear infinite;
`;

// Component
function Footer() {
  return (
    <FooterContainer>
      <FooterGrid>
        <Logo>Ashwini Bheemireddy</Logo>
        <SocialIcons>
          <IconLink href="#" aria-label="Facebook" target="_blank">
            <FacebookIcon />
          </IconLink>
          <IconLink href="#" aria-label="Twitter" target="_blank">
            <TwitterIcon />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/ashwini2127/" aria-label="LinkedIn" target="_blank">
            <LinkedInIcon />
          </IconLink>
          <IconLink href="https://github.com/bheemireddyashwini" aria-label="GitHub" target="_blank">
            <FaGithub />
          </IconLink>
        </SocialIcons>
      </FooterGrid>

      <Copyright>
        &copy; 2025 Ashwini Bheemireddy. All rights reserved.
      </Copyright>

      <WaveWrapper>
        <Wave viewBox="0 0 120 28" preserveAspectRatio="none">
          <path d="M0 0 C30 15, 60 0, 90 10 C120 20, 120 0, 120 0 Z" fill="#1c3d5c" />
        </Wave>
        <Wave viewBox="0 0 120 28" preserveAspectRatio="none" style={{ top: '20px', opacity: 0.6 }}>
          <path d="M0 0 C30 15, 60 0, 90 10 C120 20, 120 0, 120 0 Z" fill="#16324f" />
        </Wave>
      </WaveWrapper>
    </FooterContainer>
  );
}

export default Footer;
