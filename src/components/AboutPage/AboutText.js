import { useTranslation } from "react-i18next";

const AboutText = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-maroon rounded-lg py-4 px-4 max-w-[50vw] max-[420px]:max-w-[80vw] h-[70vh] grid grid-rows-[repeat(3,min-content)] gap-y-4">
            <p className="text-beige whitespace-pre-wrap min-[1100px]:text-lg min-[800px]:text-base min-[650px]:text-sm min-[320px]:text-xs">{t("aboutPara1")}</p>
            <p className="text-beige whitespace-pre-wrap min-[1100px]:text-lg min-[800px]:text-base min-[650px]:text-sm min-[320px]:text-xs">{t("aboutPara2")}</p>
            <p className="text-beige whitespace-pre-wrap min-[1100px]:text-lg min-[800px]:text-base min-[650px]:text-sm min-[320px]:text-xs">{t("aboutPara3")}</p>
        </div>
    );
}

export default AboutText;