import Arrow from "../../assets/icons/arrow.svg";
import Character from "./Character";
import { useTranslation } from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation();

    return (
        // This class is for trigger about underline in header links
        <div className=" bg-black h-screen">
            <div className=" absolute m-auto inset-0 h-fit w-fit ">
                <h1 className="text-beige text-center font-bold text-7xl mb-2">{t("name")}</h1>
                <Character />
            </div>
            <div className="absolute bottom-0 mx-auto  inset-x-0 w-fit h-fit grid grid-rows-2 justify-items-center">
                <p className="text-beige text-3xl mb-4">{t("See more")}</p>
                <img src={Arrow} className="bg-beige animate-bounce rounded-full w-8 h-8 hover:cursor-pointer hover:bg-gray" />
            </div>
        </div>
    );
}

export default HomePage;