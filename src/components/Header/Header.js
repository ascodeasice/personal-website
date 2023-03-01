import Link from "./Link";
import LanguageSwitch from "./LanguageSwitch";
import { useState } from "react";
import { useTranslation } from "react-i18next";


const Header = () => {
    // which link in header in active
    const [activeIndex, setActiveIndex] = useState(0);
    const { t } = useTranslation();

    return (
        <header className="bg-maroon h-[10vh] grid grid-cols-2 items-center fixed w-full z-50 shadow-md">
            <div className="grid grid-cols-[repeat(4,min-content)] gap-x-8 ml-8">
                <Link>{t("About")}</Link>
                <Link delay="50">{t("Skills")}</Link>
                <Link delay="100">{t("Project")}</Link>
                <Link delay="150">{t("Contact")}</Link>
            </div>
            <div className="flex justify-end mr-8 gap-x-2 items-center">
                <p className="text-beige font-bold text-3xl animate-slide-up animation-delay-200 opacity-0">TW</p>
                <LanguageSwitch />
                <p className="text-beige font-bold text-3xl animate-slide-up animation-delay-400 opacity-0">EN</p>
            </div>
        </header>
    );
}

export default Header;