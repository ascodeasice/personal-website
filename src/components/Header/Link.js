import { useEffect, useState } from "react";

/* NOTE maybe use a int(index) variable in parent component, only allow one 
    linke active at a time is better
*/
const Link = ({ children }) => {
    const [inArea, setInArea] = useState(false);

    // use a trigger class to detect whether in certain area(maybe page class)
    // problem: how to make it reusable? how to make it two directional
    const scrollToArea = () => {
        // TODO: scroll to area
        setInArea(true);
    }

    return (
        <button className={`text-beige hover:underline ${inArea ? "underlinedLink" : ""}`} onClick={scrollToArea}>
            {children}
        </button>
    );
}

export default Link;