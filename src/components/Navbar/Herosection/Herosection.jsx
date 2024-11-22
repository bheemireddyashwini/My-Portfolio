/* eslint-disable react/no-unescaped-entities */
import styled, { keyframes } from "styled-components";
import Bio from "./Bio";
import HeroAnimation from "./HeroAnimation";
import { useState, useEffect } from "react";
const glowAnimation = `
  @keyframes glowAnimation {
    0% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.4);
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.4), 0 0 10px rgba(255, 255, 255, 0.3);
    }
    50% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 0.7);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5);
    }
    100% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.4);
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.4), 0 0 10px rgba(255, 255, 255, 0.3);
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }

  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBackground = styled.div`
  background: radial-gradient(circle, #1a1a2e, #16213e, #0f3460);
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  justify-content: end;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const HeroInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
const ResumeButton = styled.a`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  padding: 8px 16px; /* Reduced padding */
  background-color: #6598ce;
  color: ${({ theme }) => theme.white};
  border-radius: 15px;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  /* Glowing effect animation */
  animation: ${glowAnimation} 1.5s infinite ease-in-out;

  /* Hover effect with scaling, glowing, and background change */
  &:hover {
    transform: scale(1.1); /* Slightly enlarge button on hover */
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.15); /* Deeper shadow */
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.secondary},
      ${({ theme }) => theme.primary}
    ); /* Gradient background */
    color: ${({ theme }) => theme.white}; /* Keep text color consistent */
    animation: pulse 1.2s ease-in-out infinite,
      glowAnimation 1.5s infinite ease-in-out; /* Pulse + Glow */
  }

  /* Active state with shrink effect */
  &:active {
    transform: scale(0.95); /* Shrink slightly on click */
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow */
    animation: bounce 0.5s ease, glowAnimation 1.5s infinite ease-in-out; /* Bounce + Glow */
  }

  /* Pulse animation */
  @keyframes pulse {
    0% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1.1);
    }
  }

  /* Bounce animation */
  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    20% {
      transform: scale(1.1);
    }
    40% {
      transform: scale(0.9);
    }
    60% {
      transform: scale(1.05);
    }
    80% {
      transform: scale(0.98);
    }
    100% {
      transform: scale(1);
    }
  }

  /* Glow effect animation */
  @keyframes glowAnimation {
    0% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
        0 0 10px rgba(255, 255, 255, 0.4);
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.4),
        0 0 10px rgba(255, 255, 255, 0.3);
    }
    50% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 1),
        0 0 20px rgba(255, 255, 255, 0.7);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.7),
        0 0 20px rgba(255, 255, 255, 0.5);
    }
    100% {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
        0 0 10px rgba(255, 255, 255, 0.4);
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.4),
        0 0 10px rgba(255, 255, 255, 0.3);
    }
  }

  /* Mobile responsiveness */
  @media (max-width: 640px) {
    font-size: 16px;
    padding: 6px 12px; /* Even smaller for mobile */
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const HeroRightContainer = styled.div`
  width: 90%;
  order: 2;
  display: flex;
  justify-content: center;
  gap: 12px;

  @media screen and (max-width: 960px) {
    order: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;
  
  }

  @media screen and (max-width: 640px) {
    order: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: ${({ theme }) => theme.white};

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 42px;
    margin-bottom: 8px;
  }

  span {
    color: ${({ theme }) => theme.white};
  }
`;

const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  display: flex;
  overflow: hidden;
  position: relative;
  height: 40px;

  span {
    position: absolute;
    color: transparent;
    background: linear-gradient(45deg, #ffa500, #32cd32, #1e90ff, #ff1493);
    -webkit-background-clip: text;
    animation: ${fadeIn} 3s ease-in-out infinite alternate,
      ${fadeOut} 3s ease-in-out infinite alternate-reverse;
    transform: scale(1.2);
  }

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 24px;
    line-height: 42px;
  }
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary + "95"};
  line-height: 32px;
  margin-bottom: 32px;
  animation: ${fadeIn} 1s ease-out forwards;
  font-weight: 500;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Img = styled.img`
  width: 60%;
  height: 80%;
  position: relative;
  border-radius: 50%;
  max-width: 400px;
  max-height: 400px;
  margin-top: 40px;
  object-fit: cover;
  object-position: center;
  border: 1px solid ${({ theme }) => theme.primary};

  @media screen and (max-width: 960px) {
    max-height: 400px;
  }

  @media screen and (max-width: 640px) {
    max-height: 300px;
  }
`;

function Herosection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % Bio.roles.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about">
      <HeroContainer>
        <HeroBackground>
          <HeroAnimation />
        </HeroBackground>

        <HeroInner>
          <HeroLeftContainer>
            <Title>
              Hi, I'm <br /> <span>{Bio.name}</span>
            </Title>
            <TextLoop>
              <span>{Bio.roles[currentRoleIndex]}</span>
            </TextLoop>
            <Subtitle>{Bio.description}</Subtitle>
            <ResumeButton href={Bio.resume} target="_blank">
              Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Img src="profile.jpg" alt="profilepic" />
          </HeroRightContainer>
        </HeroInner>
      </HeroContainer>
    </div>
  );
}

export default Herosection;
