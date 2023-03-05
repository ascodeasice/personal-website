import SkillContainer from "./SkillContainer";
import HTML from "../../assets/icons/frontendSkills/html.svg";
import CSS from "../../assets/icons/frontendSkills/css.svg";
import JS from "../../assets/icons/frontendSkills/js.svg";
import PUG from "../../assets/icons/frontendSkills/pug.svg";
import TAILWIND from "../../assets/icons/frontendSkills/tailwind.svg";
import REACT from "../../assets/icons/frontendSkills/react.svg";
import BOOTSTRAP from "../../assets/icons/frontendSkills/bootstrap.svg";
import EXPRESS from "../../assets/icons/backendSkills/express.svg";
import FIREBASE from "../../assets/icons/backendSkills/firebase.svg";
import MONGODB from "../../assets/icons/backendSkills/mongodb.svg";
import MONGOOSE from "../../assets/icons/backendSkills/mongoose.png";
import NODE from "../../assets/icons/backendSkills/node.svg";
import PASSPORT from "../../assets/icons/backendSkills/passport.png";
import GIT from "../../assets/icons/tools/git.svg";
import NPM from "../../assets/icons/tools/npm.svg";
import WEBPACK from "../../assets/icons/tools/webpack.svg";
import JEST from "../../assets/icons/tools/jest.svg";
import RAILWAY from "../../assets/icons/tools/railway.svg";

import { useTranslation } from "react-i18next";

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

    const backendSkills = [
        {
            src: FIREBASE,
            name: "Firebase"
        },
        {
            src: NODE,
            name: "Node.js"
        },
        {
            src: EXPRESS,
            name: "Express.js"
        },
        {
            src: MONGODB,
            name: "Mongo DB"
        },
        {
            src: MONGOOSE,
            name: "Mongoose"
        },
        {
            src: PASSPORT,
            name: "Passport.js"
        },
        null
    ];

    const tools = [
        {
            src: GIT,
            name: "Git",
        },
        {
            src: NPM,
            name: "NPM",
        },
        {
            src: WEBPACK,
            name: "Webpack",
        },
        {
            src: JEST,
            name: "Jest",
        },
        {
            src: RAILWAY,
            name: "Railway",
        },
        null,
        null,
    ];

    const { t } = useTranslation();

    return (
        <div id="skillScroll" className="min-h-screen bg-black grid grid-rows-[repeat(4,min-content)] gap-y-8 justify-items-center pt-[15vh]">
            <h1 className="text-beige text-7xl max-sm:text-5xl font-bold">{t("Skills")}</h1>
            <SkillContainer num="0" title="Frontend" skills={frontendSkills} />
            <SkillContainer num="1" title="Backend" skills={backendSkills} />
            <SkillContainer num="2" title="Tools" skills={tools} />
        </div>
    );
}

export default SkillPage;