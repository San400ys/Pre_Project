import styled from "styled-components";

const CardStyle = styled.div`
    width: calc(20% - 20px);
    margin-bottom: 20px;
    box-shadow: 0 4px 8px #7c7c7c;
    border-radius: 8px;
    overflow: hidden;
    background-color: white;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    &:hover {
        box-shadow: 0 4px 8px #383838;
    }

    h1 {
        font-size: 21px;
        padding: 10px;
        color: black;
        background-color: white;
    }

    p {
        color: black;
        font-size: 14px;
        padding: 10px;
        background-color: white;
    }

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        display: block;
    }

    button {
        display: block;
        margin-top: 25px;
        width: 100%;
        padding: 10px;
        background-color: white;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button:hover {
        background-color: #b8cdf3;
    }
    a {
        width: 100%;
    }
`;

export default CardStyle;