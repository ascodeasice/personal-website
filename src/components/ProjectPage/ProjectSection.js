// project image
import INSTAGRAM1 from "../../assets/images/projectPictures/instagram1.png";
import FACEBOOK1 from "../../assets/images/projectPictures/facebook1.png";
import WALDO1 from "../../assets/images/projectPictures/waldo1.png";

// tech icon
import REACT from "../../assets/icons/frontendSkills/react.svg";
import FIREBASE from "../../assets/icons/backendSkills/firebase.svg";
import GIT from "../../assets/icons/tools/git.svg";
import NPM from "../../assets/icons/tools/npm.svg";
import EXPRESS from "../../assets/icons/backendSkills/express.svg";
import MONGODB from "../../assets/icons/backendSkills/mongodb.svg";
import PUG from "../../assets/icons/frontendSkills/pug.svg";
import TAILWIND from "../../assets/icons/frontendSkills/tailwind.svg";
import JS from "../../assets/icons/frontendSkills/js.svg";

// components and packages
import ProjectPage from "./ProjectPage";
import uniqid from "uniqid";

const ProjectSection = () => {
    const projects = [
        {
            name: "Instagram Clone",
            image: INSTAGRAM1,
            teches: [REACT, FIREBASE, GIT, NPM],
            liveLink: "https://instagram-clone-9075e.firebaseapp.com/",
            githubLink: "https://github.com/ascodeasice/insta-clone",
        },
        {
            name: "Facebook Clone",
            image: FACEBOOK1,
            teches: [PUG, TAILWIND, EXPRESS, MONGODB],
            liveLink: "https://facebook-clone-ascodeasice.up.railway.app/",
            githubLink: "https://github.com/ascodeasice/facebook-clone",
        },
        {
            name: "Where is Waldo",
            image: WALDO1,
            teches: [REACT, FIREBASE, JS, GIT],
            liveLink: "https://where-is-waldo-and-more.web.app/",
            githubLink: "https://github.com/ascodeasice/where-is-waldo"
        }
    ];

    return (
        projects.map((project, index) => {
            if (index == 0) {
                return <ProjectPage project={project} id="projectScroll" key={uniqid()}></ProjectPage>
            } else {
                return <ProjectPage project={project} key={uniqid()} />
            }
        })
    )
}

export default ProjectSection;