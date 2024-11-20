import styled, { keyframes } from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaGithub } from "react-icons/fa";

// Keyframes for footer animations
const slideIn = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const waveMotion = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Footer container
const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem 1rem;
  background: rgb(90, 115, 146);
  color: white;
  text-align: center;
  overflow: hidden;
  animation: ${slideIn} 1s ease-out;
`;

// Footer content wrapper
const FooterWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

// Logo with subtle animation
const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  animation: ${pulse} 3s infinite;
`;

// Social media icons container
const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.8rem;
  transition: transform 0.3s, color 0.3s;
  
  &:hover {
    transform: scale(1.2);
    color: #ffae42;
  }
`;

// Copyright text
const CopyrightText = styled.p`
  font-size: 0.9rem;
  color: #d1d5db;
`;

// Wave animation wrapper
const WaveContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 120px;
  overflow: hidden;
  line-height: 0;
`;

const Wave = styled.svg`
  position: absolute;
  width: 200%;
  height: 100%;
  animation: ${waveMotion} 8s linear infinite;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Ashwini Bheemireddy</Logo>

        <SocialIcons>
          <SocialIcon href="#" target="_blank" aria-label="Facebook">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon href="#" target="_blank" aria-label="Twitter">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/ashwini2127/" target="_blank" aria-label="LinkedIn">
            <LinkedInIcon />
          </SocialIcon>
          <SocialIcon href="https://github.com/bheemireddyashwini" target="_blank" aria-label="GitHub">
            <FaGithub />
          </SocialIcon>
        </SocialIcons>

        <CopyrightText>
          Copyright © 2024 Ashwini Bheemireddy.
        </CopyrightText>
      </FooterWrapper>

      <WaveContainer>
        <Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 28" preserveAspectRatio="none">
          <path
            d="M0 0 C30 15, 60 0, 90 10 C120 20, 120 0, 120 0 Z"
            fill="#1c3d5c"
          />
        </Wave>
        <Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 28" preserveAspectRatio="none" style={{ top: '10px', opacity: 0.7 }}>
          <path
            d="M0 0 C30 15, 60 0, 90 10 C120 20, 120 0, 120 0 Z"
            fill="#16324f"
          />
        </Wave>
      </WaveContainer>
    </FooterContainer>
  );
}

export default Footer;
