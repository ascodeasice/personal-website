import ARROW from "../../assets/icons/whiteArrow.svg";
import { useTranslation } from "react-i18next";
import scrollTrigger from "../../functions/scrollTrigger";
import { useEffect } from "react";

const ClickMe = ({ num }) => {
    const className = `click-me-${num}`;
    const { t } = useTranslation();

    useEffect(() => {
        scrollTrigger(`.${className}`, `.${className}`, "animate-slide-right", 0.25, false);
    }, [t]);

    return (
        <div className={`max-project-break:row-start-3 flex mt-4 ${className} opacity-0 animation-delay-900`}>
            <p className="text-beige text-xs">{t("Click Me")}</p>
            <img src={ARROW} className="rotate-180 w-4 h-4" />
        </div>
    );
}

export default ClickMe;