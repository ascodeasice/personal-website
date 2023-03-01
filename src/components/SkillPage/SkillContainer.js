import SkillBox from "./SkillBox";
import uniqid from "uniqid";
import { useTranslation } from "react-i18next";

const SkillContainer = ({ title, skills }) => {
    const { t } = useTranslation();

    return (
        <div className="w-[80vw]">
            <h1 className="text-beige font-bold text-3xl mb-2">{t(title)}</h1>
            <div className="grid grid-auto-fit-[6rem]">
                {
                    skills.map(skill => <SkillBox skill={skill} key={uniqid()} />)
                }
            </div>
        </div>
    );
}
export default SkillContainer;