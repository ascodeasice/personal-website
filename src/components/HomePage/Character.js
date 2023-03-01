import { useTranslation } from "react-i18next";

const Character = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1 className=" text-center font-bold text-5xl text-beige">{t("A")}
                {/* TODO: have animation to switch between different character text */}
                <span className="text-custom-red"> {t("character1")}</span>
            </h1>
        </>
    );
}

export default Character;