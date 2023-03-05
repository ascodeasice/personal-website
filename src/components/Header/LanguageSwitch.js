import { useState } from "react";
import i18n from "i18next";

const LanguageSwitch = () => {
    const [language, setLanguage] = useState("en");

    const handleClick = () => {
        if (language == "en") {
            setLanguage("zh");
            i18n.changeLanguage("zh")
        } else if (language == "zh") {
            setLanguage("en");
            i18n.changeLanguage("en")
        } else {
            console.log("Invalid language:" + language);
            setLanguage("en");
            i18n.changeLanguage("en");
        }
    }

    return (
        <button onClick={handleClick} className="rounded-full bg-black w-16 h-8 flex items-center px-1 animate-slide-up animation-delay-300 opacity-0" >
            <div className={`rounded-full bg-beige w-6 h-6 transition ${language == "en" ? "switchOn" : " "}`}></div>
        </button>
    );
}

export default LanguageSwitch;