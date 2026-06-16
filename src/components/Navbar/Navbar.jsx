import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import AnimatedLogo from "./AnimatedLogo";

const Nav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 82px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(13, 19, 33, 0.72);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const NavLogo = styled(LinkR)`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  font-family: "Sora", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.4px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  span {
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 480px) {
    font-size: 0.95rem;
    gap: 6px;
  }
`;

const MenuButton = styled.button`
  display: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.white};
  font-size: 1.35rem;
  cursor: pointer;

  @media screen and (max-width: 860px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 22px;

  @media screen and (max-width: 860px) {
    position: fixed;
    top: 82px;
    right: 0;
    width: 240px;
    height: calc(100vh - 82px);
    margin: 0;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    background: rgba(13, 19, 33, 0.94);
    border-left: 1px solid ${({ theme }) => theme.border};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.25s ease;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.96rem;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;

const Cta = styled.a`
  text-decoration: none;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #2f6a96);
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  font-size: 0.92rem;
  border-radius: 999px;
  padding: 10px 18px;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }

  @media screen and (max-width: 860px) {
    width: 100%;
    text-align: center;
    margin-top: 6px;
  }
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/" onClick={closeMenu}>
          <div className="flex items-center gap-2">
            <AnimatedLogo />
            <span>Portfolio</span>
          </div>
        </NavLogo>

        <MenuButton
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>

        <NavItems open={menuOpen}>
          <NavLink href="#about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink href="#education" onClick={closeMenu}>
            Education
          </NavLink>
          <NavLink href="#skills" onClick={closeMenu}>
            Skills
          </NavLink>
          <NavLink href="#projects" onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink href="#experience" onClick={closeMenu}>
            Experience
          </NavLink>
          <NavLink href="#contact" onClick={closeMenu}>
            Contact
          </NavLink>
          <Cta href="#projects" onClick={closeMenu}>
            View Work
          </Cta>
        </NavItems>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
