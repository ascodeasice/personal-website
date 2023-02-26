import Link from "./Link";
import LanguageSwitch from "./LanguageSwitch";
import { useState } from "react";

const Header = () => {
    // which link in header in active
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <header className="bg-maroon h-[10vh] grid grid-cols-2 items-center fixed w-full z-50">
            <div className="grid grid-cols-[repeat(4,min-content)] gap-x-8 ml-8">
                <Link>About</Link>
                <Link>Skills</Link>
                <Link>Project</Link>
                <Link>Contact</Link>
            </div>
            <div className="flex justify-end mr-8 gap-x-2 items-center">
                <p className="text-beige font-bold text-3xl">TW</p>
                <LanguageSwitch />
                <p className="text-beige font-bold text-3xl">EN</p>
            </div>
        </header>
    );
}

export default Header;