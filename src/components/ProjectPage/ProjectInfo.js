import uniqid from "uniqid";
import TechBox from "./TechBox";
import GITHUB from "../../assets/icons/github.svg";
import WEB from "../../assets/icons/web.svg";
import { useTranslation } from "react-i18next";

const ProjectInfo = ({ liveLink, githubLink, iconSrcArr }) => {
    const { t } = useTranslation();

    return (
        <>
            <div className="grid items-center gap-x-4 grid-cols-[4rem_min-content]">
                <a href={liveLink}>
                    <img src={WEB} className="w-16 h-16 hover:scale-110" />
                </a>
                <a href={liveLink} className="text-custom-red whitespace-nowrap underline text-2xl hover:text-maroon">
                    {t("Live Preview")}
                </a>
            </div>
            <div className="grid items-center gap-x-4 grid-cols-[4rem_min-content]">
                <a href={githubLink}>
                    <img src={GITHUB} className="w-16 invert hover:scale-110" />
                </a>
                <a href={githubLink} className="text-custom-red whitespace-nowrap underline text-2xl hover:text-maroon">
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