import styled from "styled-components";

const SearchStyle = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    input {
        background-color: white;
        width: 300px;
        padding: 10px;
        font-size: 16px;
        border: 2px solid #a6a6a6;
        border-radius: 5px;
    }

    input:focus {
        border-color: black;
`
export default SearchStyle;