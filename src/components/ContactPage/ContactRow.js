import { useEffect } from "react";
import scrollTrigger from "../../functions/scrollTrigger";

const ContactRow = ({ src, href, text, num }) => {
    const iconClassName = `contact-icon-${num}`;
    const linkClassName = `contact-link-${num}`;

    useEffect(() => {
        scrollTrigger(`.${iconClassName}`, `.${iconClassName}`, "animate-contact-slide-right", 0.25, false);
        scrollTrigger(`.${linkClassName}`, `.${linkClassName}`, "animate-contact-slide-right", 0.25, false);
    }, []);

    return (
        <div className="grid grid-cols-[5rem_min-content] gap-x-4 items-center">
            <a href={href}>
                <img src={src} className={`${iconClassName} w-20 h-20 hover:scale-110 transition opacity-0 animation-delay-${400 + 100 * num}`} />
            </a>
            <a href={href} className={`${linkClassName} text-custom-red font-bold underline text-5xl hover:text-maroon transition-colors opacity-0  animation-delay-${100 + 100 * num}`}>{text ?? "Link"}</a>
        </div>
    );
}

export default ContactRow;