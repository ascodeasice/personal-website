import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";

const ProjectPage = ({ project, id }) => {
    return (
        <div id={id ? id : ""} className="h-[90vh] bg-black grid justify-items-center pt-[10vh]">
            <div className="w-[80vw] grid grid-cols-2 grid-rows-[repeat(4,min-content)] mt-[10vh] gap-x-4">
                <h2 className="text-beige col-span-2 text-4xl font-bold mb-4">{project.name}</h2>
                <ProjectImage images={project.images} />
                <ProjectInfo iconSrcArr={project.teches} liveLink={project.liveLink} githubLink={project.githubLink} />
            </div>
        </div>
    );
}

export default ProjectPage;