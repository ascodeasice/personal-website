import uniqid from "uniqid";
import TechBox from "./TechBox";
import GITHUB from "../../assets/icons/github.svg";
import WEB from "../../assets/icons/web.svg";

const ProjectInfo = ({ liveLink, githubLink, iconSrcArr }) => {
    return (
        <>
            <div className="grid items-center gap-x-4 grid-cols-[4rem_min-content]">
                <a href={liveLink}>
                    <img src={WEB} className="w-16 h-16" />
                </a>
                <a href={liveLink} className="text-custom-red whitespace-nowrap underline text-2xl">
                    Live Preview
                </a>
            </div>
            <div className="grid items-center gap-x-4 grid-cols-[4rem_min-content]">
                <a href={githubLink}>
                    <img src={GITHUB} className="w-16 invert" />
                </a>
                <a href={githubLink} className="text-custom-red whitespace-nowrap underline text-2xl">
                    Github
                </a>
            </div>
            <div className="grid grid-auto-fit-[4rem] h-fit self-end">
                {
                    iconSrcArr.map((src) => <TechBox src={src} key={uniqid()} />)
                }
            </div>
        </>
    )
}

export default ProjectInfo;