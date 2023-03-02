import { useState, useEffect } from "react";

const SkillBox = ({ skill, className }) => {
    const [delayTime, setDelayTime] = useState(0);

    useEffect(() => {
        // 0~500
        const randomVal = Math.floor(Math.random() * 6) * 100
        setDelayTime(randomVal);
    }, []);

    if (skill == null) {
        return (
            // A placeholder for alignment
            <div></div>
        );
    } else {
        return (
            <div className={`${className} grid grid-rows-[repeat(2,min-content)] justify-items-start w-fit scale-0 transition animation-delay-${delayTime} hover:bg-maroon`}>
                <img className="bg-beige p-2 w-20 h-20 " src={skill.src} />
                <h1 className="text-beige justify-self-center font-bold mt-1">{skill.name}</h1>
            </div>
        );
    }
}

export default SkillBox;