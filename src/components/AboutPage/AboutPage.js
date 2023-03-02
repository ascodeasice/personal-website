import AboutText from "./AboutText";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div id="aboutScroll" className="bg-black h-screen ">
            {/* TODO: make div grid min-content and 1fr to make the text box fill the entire page */}
            <div className="pt-[15vh] grid grid-rows-[repeat(2,min-content)] justify-items-center">
                <h1 className="text-beige font-bold text-7xl text-center mb-4">{t("About Me")}</h1>
                <AboutText />
            </div>
        </div>
    )
}

export default AboutPage;