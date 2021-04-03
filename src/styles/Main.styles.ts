
import styled from "styled-components";

export const Container = styled.div`
        max-width: 1170px;
        margin: auto
`;


export const HomepageList = styled.div`
        display: grid;
        margin:50px 0;
        grid-template-columns: repeat(4, 1fr);
        justify-content: space-evenly
`;


export const Title = styled.h2`
        color: #202124;
        background-color: #f1f3f4;
        padding: 10px;
        width: 200px;
        text-align: center;
        margin: 30px auto;
        font-weight: 700;
        font-size: 1.4rem;
        border-radius: 100px;
        box-sizing: border-box;
`;

export const Text = styled.p`
        font-size: 1rem;
        margin: 1rem 0;
`

export const View = styled.div`
        width: 700px;
        margin: auto;
`