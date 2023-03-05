import ARROW from "../../assets/icons/arrow.svg";
import WHITE_ARROW from "../../assets/icons/whiteArrow.svg";
import Character from "./Character";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const HomePage = () => {
    const { t } = useTranslation();
    const [arrowSrc, setArrowSrc] = useState(ARROW);

    const scrollToAboutPage = () => {
        document.getElementById("aboutScroll").scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
        });
    }

    const onHoverImg = () => {
        setArrowSrc(WHITE_ARROW);
    }

    const onLeaveImg = () => {
        setArrowSrc(ARROW);
    }

    return (
        // This class is for trigger about underline in header links
        <div id="homeScroll" className=" bg-black h-screen">
            <div className=" absolute m-auto inset-0 h-fit w-fit ">
                <h1 className="text-beige text-center font-bold text-7xl mb-2 animation-delay-600 animate-slide-up opacity-0">{t("name")}</h1>
                <Character />
            </div>
            <div className="absolute bottom-0 mx-auto  inset-x-0 w-fit h-fit grid grid-rows-2 justify-items-center animation-delay-1000 animate-slide-up opacity-0">
                <p className="text-beige text-3xl mb-4">{t("See more")}</p>
                <img onClick={scrollToAboutPage} onMouseOver={onHoverImg} onMouseLeave={onLeaveImg} src={arrowSrc} className="hover:bg-custom-red bg-beige animate-bounce rounded-full w-8 h-8 hover:cursor-pointer" />
            </div>
        </div>
    );
}

export default HomePage;