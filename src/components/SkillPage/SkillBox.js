const SkillBox = ({ skill }) => {
    return (
        <div className="grid grid-rows-2 justify-items-start w-fit">
            <img className="bg-beige p-2 w-20 h-20" src={skill.src} />
            <h1 className="text-beige justify-self-center font-bold mt-1">{skill.name}</h1>
        </div>
    );
}

export default SkillBox;