import SkillContainer from "./SkillContainer";
import HTML from "../../assets/icons/frontendSkills/html.svg";
import CSS from "../../assets/icons/frontendSkills/css.svg";
import JS from "../../assets/icons/frontendSkills/js.svg";
import PUG from "../../assets/icons/frontendSkills/pug.svg";
import TAILWIND from "../../assets/icons/frontendSkills/tailwind.svg";
import REACT from "../../assets/icons/frontendSkills/react.svg";
import BOOTSTRAP from "../../assets/icons/frontendSkills/bootstrap.svg";

const SkillPage = () => {
    const frontendSkills = [
        {
            src: HTML,
            name: "HTML",
        },
        {
            src: CSS,
            name: "CSS",
        },
        {
            src: JS,
            name: "JavaScript",
        },
        {
            src: REACT,
            name: "React",
        },
        {
            src: PUG,
            name: "Pug",
        },
        {
            src: TAILWIND,
            name: "Tailwind",
        },
        {
            src: BOOTSTRAP,
            name: "Bootstrap",
        },
    ];

    return (
        <div className="min-h-screen bg-black grid grid-rows-[repeat(3,min-content)] gap-y-2 justify-items-center pt-[15vh]">
            <SkillContainer title="Frontend" skills={frontendSkills} />
            <SkillContainer title="Backend" skills={[]} />
            <SkillContainer title="Tools" skills={[]} />
        </div>
    );
}

export default SkillPage;