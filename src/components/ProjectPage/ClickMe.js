import ARROW from "../../assets/icons/whiteArrow.svg";

const ClickMe = () => {
    return (
        <div className="flex">
            <p className="text-beige text-xs">Click Me</p>
            <img src={ARROW} className="rotate-180 w-4 h-4" />
        </div>
    );
}

export default ClickMe;