const InfoRow = ({ src, link, text, inverted, className }) => {
    return (
        <div className={`max-[450px]:col-span-2 grid items-center gap-x-4 max-project-break:grid-cols-[3rem_min-content] grid-cols-[4rem_min-content] opacity-0 ${className} animation-delay-300`}>
            <a href={link} target="_blank">
                <img src={src} className={`${inverted ? "invert" : ""} w-16 max-project-break:w-12 hover:scale-110 transition`} />
            </a>
            <a href={link} target="_blank" className=" max-project-break:text-lg text-custom-red whitespace-nowrap underline text-2xl hover:text-maroon">
                {text}
            </a>
        </div>
    );
}

export default InfoRow;