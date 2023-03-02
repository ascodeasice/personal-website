import { useTranslation } from "react-i18next";
import { i18n } from "../../i18n";
import { useEffect, useState } from "react";

const Character = () => {
    const { t, i18n } = useTranslation();
    const [currentText, setCurrentText] = useState("");


    const startTypeEffects = () => {
        let currentLanguage = i18n.language;
        let words = [t("character1"), t("character2")];
        let arrIndex = 0;
        let textIndex = 0;
        let forward = true;
        let loopSkipped = 0;
        const speed = 70;
        const skipLoopCount = 15;
        setInterval(() => {
            // update text when language is changed
            let currentWord = words[arrIndex];
            if (i18n.language != currentLanguage) {
                currentLanguage = i18n.language;
                words = [t("character1"), t("character2")];
                currentWord = words[arrIndex];
                setCurrentText(currentWord);
                textIndex = currentWord.length;
            }

            if (forward) {
                if (textIndex > currentWord.length) {
                    // over
                    loopSkipped++;
                    if (loopSkipped == skipLoopCount) {
                        loopSkipped = 0;
                        forward = false;
                    }
                } else {
                    // forward, not over
                    setCurrentText(currentWord.substring(0, textIndex));
                    textIndex++;
                }
            } else {
                if (textIndex <= 0) {
                    // backwards over
                    forward = true;
                    if (arrIndex + 1 >= words.length) {
                        arrIndex = 0;
                    } else {
                        arrIndex++;
                    }
                    // no delay for backward over
                } else {
                    setCurrentText(currentWord.substring(0, textIndex));
                    textIndex--;
                }
            }
        }, speed);
    }

    useEffect(() => {
        startTypeEffects();
    }, []);

    return (
        <>
            <h1 className=" text-center font-bold text-5xl text-beige">{t("A")}
                {/* TODO: have animation to switch between different character text */}
                <span className="text-custom-red"> {currentText}</span>
                <span className="text-custom-red animate-blink">|</span>
                {/* space */}
            </h1>
        </>
    );
}

export default Character;