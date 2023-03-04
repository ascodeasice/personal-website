// An image slider that contains multiple image, and allows switching image
import { useEffect, useState } from 'react';
import scrollTrigger from '../../functions/scrollTrigger';

const ProjectImage = ({ images, num }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [sliding, setSliding] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const getNextImageIndex = () => {
        return imageIndex + 1 >= images.length ? 0 : imageIndex + 1;
    }

    const switchImage = () => {
        setSliding(false);
        setImageIndex(getNextImageIndex());
    }

    // when first scrolled to it, add animation
    useEffect(() => {
        scrollTrigger(`.project-image-${num}`, `.project-image-${num}`, "animate-image-slide-right", 0.5, false)
    }, []);

    useEffect(() => {
        if (isFirstRender) {
            return;
        }
        setSliding(true);
    }, [imageIndex]);

    return (
        <img className={`project-image-${num} h-[50vh] row-span-3 cursor-pointer opacity-0 ${sliding ? "animate-image-slide-right" : ""}`} src={images[imageIndex]} onClick={switchImage} />
    );
}

export default ProjectImage;