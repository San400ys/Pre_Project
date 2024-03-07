import styled from "styled-components";

const MyRecipesStyle = styled.div`
    padding: 20px;
    
    form{
        margin-bottom: 20px;
    }
    
    input{
        margin-right: 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: white;
    }
    
    button{
        padding: 8px 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f0f0f0;
        cursor: pointer;
    }
    h2{
        margin-bottom: 20px;
    }
`;
const MyCardStyle = styled.div`
    width: calc(20% - 20px);
    box-shadow: 0 4px 8px #7c7c7c;
    border-radius: 8px;
    overflow: hidden;
    background-color: white;
    height: 100%;
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
    a {
        width: 100%;
    }
`;
export {MyRecipesStyle, MyCardStyle};