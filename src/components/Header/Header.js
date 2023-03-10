import Link from "./Link";
import LanguageSwitch from "./LanguageSwitch";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import scrollTrigger from "../../functions/scrollTrigger";


const Header = () => {
    // which link in header in active
    const { t } = useTranslation();

    useEffect(() => {
        scrollTrigger(".aboutTrigger", ".aboutTarget", "custom-underline", 0.5);
        scrollTrigger(".skillsTrigger", ".skillsTarget", "custom-underline", 0.25);
        scrollTrigger(".projectTrigger", ".projectTarget", "custom-underline", 0.1);
        scrollTrigger(".contactTrigger", ".contactTarget", "custom-underline", 0.25);
    }, []);

    return (
        <header className="bg-maroon h-[10vh] grid grid-cols-2 max-sm:grid-cols-1 max-sm:justify-items-center items-center fixed w-full z-50 shadow-md">
            <div className="grid grid-cols-[repeat(4,min-content)] gap-x-8 sm:ml-8">
                <Link scrollId="homeScroll" className={"aboutTarget"}>{t("About")}</Link>
                <Link scrollId="skillScroll" className={"skillsTarget"} delay="50">{t("Skills")}</Link>
                <Link scrollId="project-scroll-0" className={"projectTarget"} delay="100">{t("Project")}</Link>
                <Link scrollId="contactScroll" className={"contactTarget"} delay="150">{t("Contact")}</Link>
            </div>
            <div className="flex justify-end gap-x-2 items-center sm:mr-8">
                <p className="text-beige font-bold text-3xl animate-slide-up animation-delay-200 opacity-0">TW</p>
                <LanguageSwitch />
                <p className="text-beige font-bold text-3xl animate-slide-up animation-delay-400 opacity-0">EN</p>
            </div>
        </header>
    );
}

export default Header;