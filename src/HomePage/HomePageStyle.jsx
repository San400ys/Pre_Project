import styled from "styled-components";

const HomePageStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    a{
        padding: 10px 20px;
        background-color: palegreen;
        color: black;
        text-decoration: none;
        border-radius: 5px;
        font-size: 18px;
        transition: background-color 0.3s ease;
        margin-bottom: 10px;
    }
    a:hover{
        background-color: #45a049;
    }
`
export default HomePageStyle;