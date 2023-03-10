import ContactRow from "./ContactRow";
import GITHUB from "../../assets/icons/github.svg";
import LINKEDIN from "../../assets/icons/linkedin.svg";
import MAIL from "../../assets/icons/mail.svg";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import scrollTrigger from "../../functions/scrollTrigger";

const ContactPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        scrollTrigger(".contact-container", ".contact-container", "animate-contact-slide-right", 0.25, false);
        scrollTrigger(".contact-title", ".contact-title", "animate-slide-up", 0.25, false);
    }, []);

    return (
        <div id="contactScroll" className="contactTrigger h-screen bg-black grid  pt-[15vh] justify-items-center">
            <div className="grid grid-rows-[min-content_1fr] gap-y-4 w-[70vw]">
                <h1 className="max-[450px]:text-5xl contact-title text-beige font-bold text-6xl justify-self-start opacity-0">{t("Contact")}</h1>
                <div className="contact-container bg-beige grid grid-rows-3 h-[60vh] p-8 opacity-0">
                    <ContactRow src={GITHUB} href="https://github.com/ascodeasice" text="Github" num={0} />
                    <ContactRow src={LINKEDIN} href="https://www.linkedin.com/in/%E6%9F%8F%E5%87%B1-%E7%8E%8B-48b109226/" text="LinkedIn" num={1} />
                    <ContactRow src={MAIL} href="mailto:ascodeasice@gmail.com" text="Email" num={2} />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;