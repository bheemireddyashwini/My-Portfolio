import ProjectData from "../components/Project/ProjectData";
import EducationData from "../components/Navbar/Education/EducationData";
import Skilldata from "../components/Navbar/skills/Skilldata";
import Experiencedata from "../components/experience/Experiencedata";
import ProjectsSection from "../components/ui/ProjectsSection";
import ContactSection from "../components/ui/ContactSection";
import HeroSection from "../components/ui/HeroSection";
import SkillsSection from "../components/ui/SkillsSection";
import SiteFooter from "../components/ui/SiteFooter";
import { AboutSection } from "../components/ui/AboutSection";
import { ExperienceSection } from "../components/ui/ExperienceSection";
import { EducationSection } from "../components/ui/EducationSection";
import ScrollToTop from "../components/ui/ScrollToTop";
import SiteHeader from "../components/ui/SiteHeader";

const marqueeSkills = Skilldata.flatMap((group) => group.skills);

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-page">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-[8.5rem] sm:px-6 sm:pt-28">
        <HeroSection />

        <AboutSection />

        <ExperienceSection items={Experiencedata} />

        <SkillsSection skills={marqueeSkills} />

        <ProjectsSection projects={ProjectData} />

        <EducationSection items={EducationData} />

        <ContactSection />

        <SiteFooter />
      </div>
    </main>
    <ScrollToTop />
  </>
  );
}
