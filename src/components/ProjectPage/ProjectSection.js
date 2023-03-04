// project images
import INSTAGRAM1 from "../../assets/images/projectPictures/instagram/1.png";
import INSTAGRAM2 from "../../assets/images/projectPictures/instagram/2.png";
import INSTAGRAM3 from "../../assets/images/projectPictures/instagram/3.png";
import INSTAGRAM4 from "../../assets/images/projectPictures/instagram/4.png";
import FACEBOOK1 from "../../assets/images/projectPictures/facebook/1.png";
import FACEBOOK2 from "../../assets/images/projectPictures/facebook/2.png";
import FACEBOOK3 from "../../assets/images/projectPictures/facebook/3.png";
import FACEBOOK4 from "../../assets/images/projectPictures/facebook/4.png";
import WALDO1 from "../../assets/images/projectPictures/whereIsWaldo/1.png";
import WALDO2 from "../../assets/images/projectPictures/whereIsWaldo/2.png";
import WALDO3 from "../../assets/images/projectPictures/whereIsWaldo/3.png";
import WALDO4 from "../../assets/images/projectPictures/whereIsWaldo/4.png";

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
            images: [INSTAGRAM1, INSTAGRAM2, INSTAGRAM3, INSTAGRAM4],
            teches: [REACT, FIREBASE, GIT, NPM],
            liveLink: "https://instagram-clone-9075e.firebaseapp.com/",
            githubLink: "https://github.com/ascodeasice/insta-clone",
        },
        {
            name: "Facebook Clone",
            images: [FACEBOOK1, FACEBOOK2, FACEBOOK3, FACEBOOK4],
            teches: [PUG, TAILWIND, EXPRESS, MONGODB],
            liveLink: "https://facebook-clone-ascodeasice.up.railway.app/",
            githubLink: "https://github.com/ascodeasice/facebook-clone",
        },
        {
            name: "Where is Waldo",
            images: [WALDO1, WALDO2, WALDO3, WALDO4],
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