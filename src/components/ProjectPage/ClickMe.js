import ARROW from "../../assets/icons/whiteArrow.svg";
import { useTranslation } from "react-i18next";

const ClickMe = () => {
    const { t } = useTranslation();

    return (
        <div className="flex mt-4 ">
            <p className="text-beige text-xs">{t("Click Me")}</p>
            <img src={ARROW} className="rotate-180 w-4 h-4" />
        </div>
    );
}

export default ClickMe;