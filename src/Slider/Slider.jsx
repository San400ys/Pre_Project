import React, { useState } from 'react';
import {SliderStyle, ImageStyle} from "./SliderStyle";

export const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slide = (index) => () => {
        setCurrentIndex(index);
    };

    return (
        <SliderStyle>
            {images.map((image, index) => (
                <ImageStyle
                    id={index}
                    src={image}
                    alt="Recipe"
                    active={index === currentIndex}
                    onClick={slide(index)}
                />
            ))}
        </SliderStyle>
    );
};

