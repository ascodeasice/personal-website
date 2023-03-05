import AboutText from "./AboutText";
import { useTranslation } from "react-i18next";
import scrollTrigger from "../../functions/scrollTrigger";
import { useEffect } from "react";

const AboutPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        scrollTrigger(".aboutTitle", ".aboutTitle", "animate-slide-left", 0.5, false);
    }, []);

    return (
        <div id="aboutScroll" className="bg-black h-screen">
            <div className="pt-[15vh] grid grid-rows-[repeat(2,min-content)] justify-items-center ">
                <h1 className=" max-md:text-5xl aboutTitle text-beige font-bold text-7xl text-center mb-4 opacity-0">{t("About Me")}</h1>
                <AboutText />
            </div>
        </div>
    )
}

export default AboutPage;