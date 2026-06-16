import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/Navbar/Herosection/Herosection";
import Skills from "./components/Navbar/skills/Skills";
import Education from "./components/Navbar/Education/Education";
import Experience from "./components/experience/ExperienceTimeLine";
import Projects from "./components/Project/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

const Body = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  padding-top: 82px;
`;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.bg};
`;

function AppContent() {
  useEffect(() => {
    // Set CSS custom properties for Tailwind
    const root = document.documentElement;
    root.style.setProperty("--primary", darkTheme.primary);
    root.style.setProperty("--secondary", darkTheme.secondary);
    root.style.setProperty("--text-primary", darkTheme.text_primary);
    root.style.setProperty("--text-secondary", darkTheme.text_secondary);
    root.style.setProperty("--bg", darkTheme.bg);
    root.style.setProperty("--bg-light", darkTheme.bgLight);
    root.style.setProperty("--card", darkTheme.card);
    root.style.setProperty("--card-light", darkTheme.card_light);
    root.style.setProperty("--border", darkTheme.border);
  }, []);

  return (
    <>
      <Navbar />
      <Body>
        <Herosection />
        <Wrapper>
          <Education />
          <Skills />
          <Projects />
        </Wrapper>
        <Wrapper>
          <Experience />
          <Contact />
        </Wrapper>
        <Footer />
      </Body>
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
