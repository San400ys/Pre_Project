import styled from 'styled-components';

export const SliderStyle = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    background-color: white;
`;

export const ImageStyle = styled.img`
    width: ${({ active }) => (active ? '300px' : '50px')};
    height: ${({ active }) => (active ? '200px' : '50px')};
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    opacity: ${({ active }) => (active ? 1 : 0.3)};
    margin-right: 5px;
`;