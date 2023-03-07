import ARROW from "../../assets/icons/arrow.svg";
import WHITE_ARROW from "../../assets/icons/whiteArrow.svg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import scrollTrigger from "../../functions/scrollTrigger";

const NextProjectButton = ({ scrollId, text, num }) => {
    const [arrowSrc, setArrowSrc] = useState(ARROW);
    const { t } = useTranslation();
    const className = `next-project-${num}`

    const scrollToId = () => {
        document.getElementById(scrollId).scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
        });
    }

    const onHover = () => {
        setArrowSrc(WHITE_ARROW);
    }

    const onLeave = () => {
        setArrowSrc(ARROW);
    }

    useEffect(() => {
        scrollTrigger(`.${className}`, `.${className}`, "animate-slide-left", 0.25, false);
    }, [t]);

    return (
        <div onClick={scrollToId} className={`${className} flex items-center mt-4 gap-x-2 cursor-pointer animation-delay-900 opacity-0 max-project-break:row-start-3 w-fit`}>
            <p className="text-beige text-sm hover:text-custom-red">{text}</p>
            <img src={arrowSrc} onMouseOver={onHover} onMouseLeave={onLeave} className=" bg-beige hover:bg-maroon rounded-full w-4 h-4" />
        </div>
    );
}

export default NextProjectButton;