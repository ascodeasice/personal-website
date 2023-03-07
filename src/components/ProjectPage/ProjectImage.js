// An image slider that contains multiple image, and allows switching image
import { useEffect, useState } from 'react';
import scrollTrigger from '../../functions/scrollTrigger';

const ProjectImage = ({ images, num }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [switching, setSwitching] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const getNextImageIndex = () => {
        return imageIndex + 1 >= images.length ? 0 : imageIndex + 1;
    }

    const switchImage = () => {
        setIsFirstRender(false);
        setSwitching(false);
        setImageIndex(getNextImageIndex());
    }

    useEffect(() => {
        if (isFirstRender) {
            scrollTrigger(`.project-image-${num}`, `.project-image-${num}`, "animate-slide-up", 0.25, false)
            return;
        }
        setSwitching(true);
    }, [imageIndex]);

    return (
        <img className={`max-project-break:col-span-2 max-project-break:row-span-1 project-image-${num} object-cover max-h-[50vh] row-span-3 cursor-pointer opacity-0 ${switching ? "animate-image-slide-right" : ""} animation-delay-200`} src={images[imageIndex]} onClick={switchImage} />
    );
}

export default ProjectImage;