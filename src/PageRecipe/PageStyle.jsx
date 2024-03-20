import styled from 'styled-components';

export const PageStyle = styled.div`
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #b4b3b3;
    height: 90vh;
    align-items: center;
    justify-content: center;
    
    h2 {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #222;
        background-color: white;
    }
    p {
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 20px;
        color: #444;
        background-color: white;
        border:  2px solid black;
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0 4px 8px #383838;
    }

    ol {
        padding: 20px;
        background-color: white;
        margin-bottom: 20px;
        text-align: start;
        
    }
    li {
        font-size: 18px;
        line-height: 1.6;
        color: #444;
        background-color: white;
    }
`;
export const Page = styled.p`
    text-align: center;
`
export const StyleCenter = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`