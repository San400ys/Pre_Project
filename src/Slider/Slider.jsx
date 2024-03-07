import React, { useState } from 'react';
import {SliderStyle, ImageStyle} from "./SliderStyle";


const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const Slide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <SliderStyle>
            {images.map((image, index) => (
                <ImageStyle
                    src={image}
                    alt="Recipe"
                    active={index === currentIndex}
                    onClick={() => Slide(index)}
                />
            ))}
        </SliderStyle>
    );
};

export default Slider;
