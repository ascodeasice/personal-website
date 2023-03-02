const Link = ({ children, delay, className, scrollId }) => {

    // bad implement, but I think forward ref is tiring 
    const scrollToArea = () => {
        document.getElementById(scrollId).scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
        });
    }

    return (
        <button className={`text-beige hover:underline whitespace-nowrap ${delay ? `anim-delay${delay}` : " "} animate-slide-up opacity-0 ${className}`} onClick={scrollToArea}>
            {children}
        </button>
    );
}

export default Link;