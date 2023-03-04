import uniqid from "uniqid";
import TechBox from "./TechBox";
import GITHUB from "../../assets/icons/github.svg";
import WEB from "../../assets/icons/web.svg";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import scrollTrigger from "../../functions/scrollTrigger";
import InfoRow from "./InfoRow";

const ProjectInfo = ({ liveLink, githubLink, iconSrcArr, num }) => {
    const { t } = useTranslation();
    const [previewText, setPreviewText] = useState(t("Live Preview"));

    useEffect(() => {
        // to update info row as the language changes
        setPreviewText(t("Live Preview"));

        // add animation scroll triggers
        scrollTrigger(`.info-row-${num}-1`, `.info-row-${num}-1`, "animate-slide-up", 0.25, false);
        scrollTrigger(`.info-row-${num}-2`, `.info-row-${num}-2`, "animate-slide-up", 0.25, false);
    }, [t]);

    return (
        <>
            <InfoRow className={`info-row-${num}-1`} src={WEB} link={liveLink} text={previewText} />
            <InfoRow className={`info-row-${num}-2`} src={GITHUB} link={githubLink} text="Github" inverted={true} />
            <div className="grid grid-auto-fit-[4rem] h-fit self-end">
                {
                    iconSrcArr.map((src, index) => <TechBox src={src} key={uniqid()} className={`tech-box-${num}-${index}`} />)
                }
            </div>
        </>
    )
}

export default ProjectInfo;