import ARROW from "../../assets/icons/arrow.svg";
import WHITE_ARROW from "../../assets/icons/whiteArrow.svg";
import { useState } from "react";

const NextProjectButton = ({ scrollId, text }) => {
    const [arrowSrc, setArrowSrc] = useState(ARROW);

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

    return (
        <div onClick={scrollToId} className="flex items-center mt-4 gap-x-2 cursor-pointer">
            <p className="text-beige text-sm hover:text-custom-red">{text}</p>
            <img src={arrowSrc} onMouseOver={onHover} onMouseLeave={onLeave} className=" bg-beige hover:bg-maroon rounded-full w-4 h-4" />
        </div>
    );
}

export default NextProjectButton;