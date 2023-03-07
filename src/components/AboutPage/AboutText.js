import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import scrollTrigger from "../../functions/scrollTrigger";

const AboutText = () => {
    const { t } = useTranslation();

    useEffect(() => {
        scrollTrigger(".aboutPara1", ".aboutPara1", "animate-slide-right", 0.5, false);
        scrollTrigger(".aboutPara2", ".aboutPara2", "animate-slide-left", 0.5, false);
        scrollTrigger(".aboutPara3", ".aboutPara3", "animate-slide-right", 0.5, false);
    }, []);

    return (
        <div className="bg-maroon rounded-lg py-4 px-4 max-w-[50vw] max-[420px]:max-w-[80vw] h-fit grid grid-rows-[repeat(3,min-content)] gap-y-4">
            <p className="aboutPara1 text-beige whitespace-pre-wrap min-[1100px]:text-lg min-[800px]:text-base min-[650px]:text-sm min-[320px]:text-[0.8rem] opacity-0 animation-delay-100">{t("aboutPara1")}</p>
            <p className="aboutPara2 text-beige whitespace-pre-wrap min-[1100px]:text-lg min-[800px]:text-base min-[650px]:text-sm min-[320px]:text-[0.8rem] animation-delay-300 opacity-0">{t("aboutPara2")}</p>
            <p className="aboutPara3 text-beige whitespace-pre-wrap min-[1100px]:text-lg min-[800px]:text-base min-[650px]:text-sm min-[320px]:text-[0.8rem] animation-delay-500 opacity-0">{t("aboutPara3")}</p>
        </div>
    );
}

export default AboutText;