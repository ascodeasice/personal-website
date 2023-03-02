import ContactRow from "./ContactRow";
import GITHUB from "../../assets/icons/github.svg";
import LINKEDIN from "../../assets/icons/linkedin.svg";
import MAIL from "../../assets/icons/mail.svg";


const ContactPage = () => {
    return (
        <div id="contactScroll" className="contactTrigger h-screen bg-black grid  pt-[15vh] justify-items-center">
            <div className="grid grid-rows-[min-content_1fr] gap-y-4 w-[70vw]">
                <h1 className="text-beige font-bold text-6xl justify-self-start">Contact</h1>
                <div className="bg-beige grid grid-rows-3 h-[60vh] p-8">
                    <ContactRow src={GITHUB} href="#" text="Github" />
                    <ContactRow src={LINKEDIN} href="#" text="LinkedIn" />
                    <ContactRow src={MAIL} href="#" text="Email" />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;