import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import scrollTrigger from "../../functions/scrollTrigger";

const TechBox = ({ src, className }) => {
    const [delayTime, setDelayTime] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        // 400~700
        setDelayTime(400 + Math.floor(Math.random() * 4) * 100);
        scrollTrigger(`.${className}`, `.${className}`, "animate-slide-up", 0, false);
    }, [t]);

    return (
        <img className={`${className} w-20 h-20 p-2 bg-beige hover:bg-maroon transition-colors self-end hover:scale-110 transition animation-delay-${delayTime} opacity-0`} src={src} />
    );
}

export default TechBox;