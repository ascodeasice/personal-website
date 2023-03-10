import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";
import scrollTrigger from "../../functions/scrollTrigger";
import ClickMe from "./ClickMe";
import NextProjectButton from "./NextProjectButton";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ProjectPage = ({ project, id, num, isLast }) => {
    const { t } = useTranslation();

    useEffect(() => {
        scrollTrigger(`.project-title-${num}`, `.project-title-${num}`, "animate-slide-up", 0.25, false);
    }, []);

    return (
        <div id={id ? id : ""} className="min-h-[90vh] bg-black pt-[10vh]">
            <div className="w-[80vw] grid grid-cols-2 grid-rows-[repeat(5,min-content)] mt-[10vh] gap-x-4 max-project-break:gap-y-2 absolute inset-x-0 mx-auto">
                <h2 className={`max-[450px]:text-2xl project-title-${num} text-beige col-span-2 text-4xl font-bold mb-4 opacity-0`}>{project.name}</h2>
                <ProjectImage images={project.images} num={num} />
                <ProjectInfo iconSrcArr={project.teches} liveLink={project.liveLink} githubLink={project.githubLink} num={num} />
                <ClickMe num={num} />
                {
                    isLast ? <NextProjectButton num={num} scrollId="contactScroll" text={t("Contact Me")} /> :
                        <NextProjectButton num={num} scrollId={`project-scroll-${num + 1}`} text={t("Next Project")} />
                }
            </div>
        </div>
    );
}

export default ProjectPage;