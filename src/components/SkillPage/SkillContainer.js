import SkillBox from "./SkillBox";
import uniqid from "uniqid";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import scrollTrigger from "../../functions/scrollTrigger";

const SkillContainer = ({ title, skills, num }) => {
    const { t } = useTranslation();

    const getRandomDelayTime = () => {
        return Math.floor(Math.random() * 6) * 100;
    }

    useEffect(() => {
        scrollTrigger(`.skill-item-${num}`, `.skill-item-${num}`, "animate-pop-up", 0.25, false);
        for (let i = 0; i < skills.length; i++) {
            scrollTrigger(`.skill-item-${num}-${i}`, `.skill-item-${num}-${i}`, "animate-pop-up", 0.25, false);
        }
    }, [t]);

    return (
        <div className="w-[80vw]">
            <h1 className={`skill-item-${num} text-beige font-bold text-3xl mb-2 scale-0 animation-delay-${getRandomDelayTime()} w-fit`}>{t(title)}</h1>
            <div className="grid grid-auto-fit-[6rem]">
                {
                    skills.map((skill, index) => <SkillBox className={`skill-item-${num}-${index}`} skill={skill} key={uniqid()} />)
                }
            </div>
        </div>
    );
}
export default SkillContainer;