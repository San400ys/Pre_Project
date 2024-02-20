import styled from "styled-components";

const HeaderStyle = styled.div`
    header {
        background-color: #333;
        color: white;
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3vh
    }

    a {
        background-color: #333;;
        color: white;
        text-decoration: none;
        margin-right: 20px;
        font-size: 18px;
    }
    a:hover {
        text-decoration: underline;
    }
`
export default HeaderStyle;