const SkillBox = ({ skill }) => {
    if (skill == null) {
        return (
            // A placeholder for alignment
            <div></div>
        );
    } else {
        return (
            <div className="grid grid-rows-[repeat(2,min-content)] justify-items-start w-fit">
                <img className="bg-beige p-2 w-20 h-20" src={skill.src} />
                <h1 className="text-beige justify-self-center font-bold mt-1">{skill.name}</h1>
            </div>
        );
    }
}

export default SkillBox;