const ContactRow = ({ src, href, text }) => {
    return (
        <div className="grid grid-cols-[5rem_min-content] gap-x-4 items-center">
            <a href={href}>
                <img src={src} className="w-20 h-20 hover:scale-110 transition" />
            </a>
            <a href={href} className="text-custom-red font-bold underline text-5xl hover:text-maroon">{text ?? "Link"}</a>
        </div>
    );
}

export default ContactRow;