import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { keyframes } from "styled-components";

const textGlow = keyframes`
  0% {
    text-shadow: 0 0 5px #91bbd4, 0 0 10px #91bbd4, 0 0 20px #91bbd4, 0 0 30px rgba(145, 187, 212, 0.6);
  }
  50% {
    text-shadow: 0 0 10px #91bbd4, 0 0 20px #91bbd4, 0 0 30px #91bbd4, 0 0 40px rgba(145, 187, 212, 0.8);
  }
  100% {
    text-shadow: 0 0 5px #91bbd4, 0 0 10px #91bbd4, 0 0 20px #91bbd4, 0 0 30px rgba(145, 187, 212, 0.6);
  }
`;

// Styled NavLogo
const NavLogo = styled(LinkR)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-right: 54px;

  /* Glowing animation */
  animation: ${textGlow} 2s ease-in-out infinite;

  /* Hover effect */
  &:hover {
    color: #91bbd4;
    text-shadow: 0 0 15px #91bbd4, 0 0 25px #91bbd4,
      0 0 35px rgba(145, 187, 212, 0.9);
    transform: scale(1.1); /* Adds a subtle zoom effect */
    transition: transform 0.3s ease-in-out;
  }
`;
const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 8px rgb(219, 157, 0), 0 0 15px rgb(219, 157, 0), 0 0 20px rgba(219, 157, 0, 0.8);
  }
  50% {
    box-shadow: 0 0 12px rgb(219, 157, 0), 0 0 25px rgb(219, 157, 0), 0 0 30px rgba(219, 157, 0, 0.5);
  }
  100% {
    box-shadow: 0 0 8px rgb(219, 157, 0), 0 0 15px rgb(219, 157, 0), 0 0 20px rgba(219, 157, 0, 0.8);
  }
`;
const Nav = styled.div`
  background: linear-gradient(135deg, #6790ba, #576d89);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;
const LogoSymbol = styled.div`
  font-size: 2.8rem;
  color: #91bbd4;
  margin-right: 10px;
`;

const Span = styled.span`
  color: white;
  font-size: 1.9rem;
  font-weight: 600;
`;

const Icon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 2rem;
    cursor: pointer;
    color: white;
  }
`;

const NavItems = styled.ul`
  display: ${({ showNav }) => (showNav ? "flex" : "none")};
  justify-content: flex-end;
  list-style: none;
  align-items: center;
  gap: 38px;
  font-size: 1.1rem;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    display: ${({ showNav }) => (showNav ? "block" : "none")};
    text-align: center;
    padding-top: 20px;
  }
`;

const NavLink = styled.a`
  color: white;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    color: #f5c42d;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, white, skyblue, pink, orange);
    transition: width 0.4s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;
const OverviewButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px; /* Adjusted padding */
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 10;
  border: 2.9px solid rgb(219, 157, 0);
  max-height: fit-content;
  margin-top: 5px;

  /* Optional: Set a max-width if you want to ensure it doesn't get too wide */
  max-width: 200px; /* Adjust this value as needed */

  /* Glowing effect animation */
  animation: ${glowAnimation} 1.5s infinite ease-in-out;

  &:hover {
    background-color: #576d89;
    transform: translateY(-3px);
  }

  &:focus {
    outline: none;
  }
`;


// Overview Section
const OverviewSection = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  padding: 30px;
  background: linear-gradient(
    135deg,
    rgba(26, 27, 38, 0.8),
    rgba(101, 152, 206, 0.2)
  );
  box-shadow: 0 4px 13px rgb(101, 152, 206);
  margin-top: 20px;
  transition: all 0.5s ease-in-out;
  opacity: ${({ show }) => (show ? "1" : "0")};
  max-height: ${({ show }) => (show ? "500px" : "0")};
  overflow: hidden;
  border-radius: 20px;
  backdrop-filter: blur(8px);

  margin-left: 20px;
  margin-right: 20px;
  animation: slideIn 0.6s ease-out;
  margin-bottom: 20px;
  position: relative; /* Ensures z-index works */
  z-index: 5; /* Section will be behind the button */

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Overview Content
const OverviewContent = styled.div`
  color: #e0e0e0; /* Light text color for readability */
  font-size: 1.15rem;
  line-height: 1.7;
  font-family: "Arial", sans-serif;
  background: rgba(26, 27, 38, 0.9); /* Dark background for content */
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative; /* Ensures z-index works */
  z-index: 3; /* Content will be behind the section */

  h2 {
    font-size: 2.2rem;
    margin-bottom: 15px;
    color: #ffffff; /* White text for headings */
    font-weight: 600;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    color: #ddd; /* Lighter color for paragraph text */
    line-height: 1.6;
    text-align: justify;
  }
`;

function Navbar() {
  const [showOverview, setShowOverview] = useState(false);
  const [showNav, setShowNav] = useState(false); // To control nav items visibility

  const handleOverviewClick = () => {
    setShowOverview(!showOverview); // Toggle overview section visibility
    setShowNav(!showNav); // Toggle nav items visibility when overview is clicked
  };

  return (
    <>
      <Nav>
        <NavContainer>
          {/* Logo (Hidden when Overview is shown) */}
          <NavLogo to="/" style={{ display: showNav ? "none" : "flex" }}>
            <LogoSymbol>{"<>"}</LogoSymbol>
            <Span>Portfolio</Span>
          </NavLogo>

          <Icon onClick={() => setShowNav(!showNav)}>
            <FaBars />
          </Icon>

          {/* Nav items (Hide when Overview is shown) */}
          <NavItems showNav={showNav}>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </NavItems>

          {/* Overview Button */}
          <OverviewButton onClick={handleOverviewClick}>
            Overview
          </OverviewButton>
        </NavContainer>
      </Nav>

      {/* Overview Section with smooth reveal */}
      <OverviewSection show={showOverview}>
        <OverviewContent>
          <h2>Overview</h2>
          <p>
            Welcome to my portfolio! I am an aspiring web developer currently
            undertaking comprehensive training at Digital Career Institute
            (DCI). With a passion for building dynamic and responsive web
            applications, I have developed a strong foundation in both front-end
            and back-end technologies. My skill set includes proficiency in
            HTML, CSS, JavaScript, and a variety of web development frameworks.
            I am committed to continuous learning, refining my skills through
            hands-on projects, collaboration with peers, and staying up-to-date
            with industry best practices. I look forward to applying my
            expertise in a professional setting and contributing to innovative
            web solutions. I expect to complete my certification by March 2025.
          </p>
        </OverviewContent>
      </OverviewSection>
    </>
  );
}

export default Navbar;
