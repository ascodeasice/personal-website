const InfoRow = ({ src, link, text, inverted, className }) => {
    return (
        <div className={`grid items-center gap-x-4 grid-cols-[4rem_min-content] opacity-0 ${className}`}>
            <a href={link}>
                <img src={src} className={`${inverted ? "invert" : ""} w-16 hover:scale-110 transition`} />
            </a>
            <a href={link} className="text-custom-red whitespace-nowrap underline text-2xl hover:text-maroon">
                {text}
            </a>
        </div>
    );
}

export default InfoRow;