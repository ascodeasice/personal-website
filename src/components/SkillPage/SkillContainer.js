import SkillBox from "./SkillBox";
import uniqid from "uniqid";

const SkillContainer = ({ title, skills }) => {
    return (
        <div className="w-[80vw]">
            <h1 className="text-beige font-bold text-3xl mb-2">{title}</h1>
            <div className="grid grid-auto-fit-[6rem]">
                {
                    skills.map(skill => <SkillBox skill={skill} key={uniqid()} />)
                }
            </div>
        </div>
    );
}
export default SkillContainer;