// An image slider that contains multiple image, and allows switching image
import { useEffect, useState } from 'react';

const ProjectImage = ({ images }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [sliding, setSliding] = useState(true);

    const getNextImageIndex = () => {
        return imageIndex + 1 >= images.length ? 0 : imageIndex + 1;
    }

    const switchImage = () => {
        setSliding(false);
        setImageIndex(getNextImageIndex());
    }

    useEffect(() => {
        setSliding(true);
    }, [imageIndex]);

    return (
        <img className={`h-[50vh] row-span-3 cursor-pointer ${sliding ? "animate-image-slide-right" : ""}`} src={images[imageIndex]} onClick={switchImage} />
    );
}

export default ProjectImage;