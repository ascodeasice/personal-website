import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import SkillPage from "./components/SkillPage/SkillPage";
import ProjectSection from "./components/ProjectPage/ProjectSection";
import ContactPage from "./components/ContactPage/ContactPage";

function App() {
  return (
    <>
      <Header />
      <div className="aboutTrigger">
        <HomePage />
        <AboutPage />
      </div>
      <div className="skillsTrigger">
        <SkillPage />
      </div>
      <div className="projectTrigger">
        <ProjectSection />
      </div>
      <div className="contactTrigger">
        <ContactPage />
      </div>
    </>
  );
}

export default App;
