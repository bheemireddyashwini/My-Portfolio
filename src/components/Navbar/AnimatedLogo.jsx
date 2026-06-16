import styled from "styled-components";

const LogoContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 480px) {
    transform: scale(0.85);
  }
`;

const LogoBox = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  
  @media screen and (max-width: 768px) {
    width: 2.75rem;
    height: 2.75rem;
  }
  
  @media screen and (max-width: 480px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const GlowBackground = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 0.75rem;
  background: linear-gradient(to bottom right, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.2));
  filter: blur(1rem);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const BorderRing = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 0.75rem;
  border: 2px solid;
  border-image: linear-gradient(135deg, rgba(96, 165, 250, 0.6), rgba(168, 85, 247, 0.4)) 1;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.2));
  animation: spin 8s linear infinite;
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const InnerBorder = styled.div`
  position: absolute;
  inset: 0.25rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(96, 165, 250, 0.4);
`;

const LogoContent = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #0f172a, #1e293b);
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1) rotate(12deg);
  }
`;

const LetterA = styled.span`
  font-size: 1.5rem;
  font-weight: 900;
  background: linear-gradient(to right, #60a5fa, #a78bfa, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.3));
`;

const ShineEffect = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 0.75rem;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.5s ease;
  
  ${LogoContent}:hover & {
    opacity: 0.3;
  }
`;

const ParticleContainer = styled.div`
  position: absolute;
  -inset: 1.5rem;
  pointer-events: none;
`;

const Particle1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0.5rem;
  height: 0.5rem;
  background: rgba(96, 165, 250, 0.6);
  border-radius: 50%;
  opacity: 0.6;
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  
  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

const Particle2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0.5rem;
  height: 0.5rem;
  background: rgba(168, 85, 247, 0.4);
  border-radius: 50%;
  opacity: 0.4;
  animation: pulse-particle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: 0.5s;
  
  @keyframes pulse-particle {
    0%, 100% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
  }
`;

export default function AnimatedLogo() {
  return (
    <LogoContainer>
      <LogoBox>
        <GlowBackground />
        <BorderRing />
        <InnerBorder />
        <LogoContent>
          <LetterA>A</LetterA>
          <ShineEffect />
        </LogoContent>
      </LogoBox>
      <ParticleContainer>
        <Particle1 />
        <Particle2 />
      </ParticleContainer>
    </LogoContainer>
  );
}
