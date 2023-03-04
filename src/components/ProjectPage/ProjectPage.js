import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";
import scrollTrigger from "../../functions/scrollTrigger";
import { useEffect } from "react";

const ProjectPage = ({ project, id, num }) => {
    useEffect(() => {
        scrollTrigger(`.project-title-${num}`, `.project-title-${num}`, "animate-slide-up", 0.25, false);
    }, []);

    return (
        <div id={id ? id : ""} className="h-[90vh] bg-black grid justify-items-center pt-[10vh]">
            <div className="w-[80vw] grid grid-cols-2 grid-rows-[repeat(4,min-content)] mt-[10vh] gap-x-4">
                <h2 className={`project-title-${num} text-beige col-span-2 text-4xl font-bold mb-4 opacity-0`}>{project.name}</h2>
                <ProjectImage images={project.images} num={num} />
                <ProjectInfo iconSrcArr={project.teches} liveLink={project.liveLink} githubLink={project.githubLink} num={num} />
            </div>
        </div>
    );
}

export default ProjectPage;