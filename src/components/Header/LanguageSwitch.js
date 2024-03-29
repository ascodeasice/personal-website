import { useState } from "react";
import i18n from "i18next";

const LanguageSwitch = () => {
    const [language, setLanguage] = useState(i18n.language);

    const handleClick = () => {
        let newLang = "en";
        if (language == "en") {
            newLang = "zh-TW";
        } else if (language != "zh-TW") {
            console.log("Invalid language:" + language);
        }

        localStorage.setItem("language", newLang);
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
    }

    return (
        <button onClick={handleClick} className="rounded-full bg-black w-16 h-8 flex items-center px-1 animate-slide-up animation-delay-300 opacity-0" >
            <div className={`rounded-full bg-beige w-6 h-6 transition ${language === "zh-TW" ? "" : "switchOn"}`}></div>
        </button>
    );
}

export default LanguageSwitch;