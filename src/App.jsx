 import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
 import Navbar from "./components/Navbar/Navbar";
 import Herosection from "./components/Navbar/Herosection/Herosection";
import Skills from "./components/Navbar/skills/Skills";
import Education from "./components/Navbar/Education/Education";
import ExperienceTimeLine from "./components/experience/ExperienceTimeLine";
import Projects from "./components/Project/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";

const Body = styled.div`
  background-color: #191924;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: #191924;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Body>
        <Herosection />
        <Wrapper>
          <Education />
          <Skills />
          <Projects />
        </Wrapper>
        <Wrapper>
          <ExperienceTimeLine />
          <Contact />
        </Wrapper>
        <Footer />
      </Body>
    </ThemeProvider>
  );
}

export default App;
 


