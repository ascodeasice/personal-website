import { useState } from "react";

/* NOTE maybe use a int(index) variable in parent component, only allow one 
    linke active at a time is better
*/
const Link = ({ children, delay, className }) => {
    const [inArea, setInArea] = useState(false);

    // use a trigger class to detect whether in certain area(maybe page class)
    // problem: how to make it reusable? how to make it two directional
    const scrollToArea = () => {
        // TODO: scroll to area
        setInArea(true);
    }

    return (
        <button className={`text-beige hover:underline whitespace-nowrap ${inArea ? "underlinedLink" : ""} ${delay ? `anim-delay${delay}` : " "} animate-slide-up opacity-0 ${className}`} onClick={scrollToArea}>
            {children}
        </button>
    );
}

export default Link;