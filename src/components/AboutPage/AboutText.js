import { useTranslation } from "react-i18next";

const AboutText = () => {
    const { t } = useTranslation();
    return (
        // TODO: use grid to space everything evenly
        <div className="bg-maroon rounded-lg py-4 px-4 max-w-[50vw] h-[70vh] grid grid-rows-[repeat(3,min-content)] gap-y-4">
            <p className="text-beige whitespace-pre-wrap text-lg">{t("aboutPara1")}</p>
            <p className="text-beige whitespace-pre-wrap text-lg">{t("aboutPara2")}</p>
            <p className="text-beige whitespace-pre-wrap text-lg">{t("aboutPara3")}</p>
        </div>
    );
}

export default AboutText;