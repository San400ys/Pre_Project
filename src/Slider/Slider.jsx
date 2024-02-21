import React, { useState } from 'react';
import {SliderStyle, ImageStyle} from "./SliderStyle";


const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <SliderStyle>
            {images.map((image, index) => (
                <ImageStyle
                    key={index}
                    src={image}
                    alt="Recipe"
                    active={index === currentIndex}
                    onClick={() => goToSlide(index)}
                />
            ))}
        </SliderStyle>
    );
};

export default Slider;
