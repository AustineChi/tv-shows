
import styled, {css} from "styled-components";
import { ReactComponent as AlertSVG } from "../../assets/alert.svg";

type AlertBoxInterfface = {
    type: string;
};

export const AlertBox = styled.div<AlertBoxInterfface>`
        display: flex;
        position: relative;
        padding: .75rem 1.25rem;
        margin: 3rem 0;
        border: 1px solid transparent;
        border-radius: .25rem;
        ${({ type }) => (type === "danger") &&
        css`
            color: #721c24;
            background-color: #f8d7da;
            border-color: #f5c6cb;
        `}
        ${({ type }) => (type === "primary") &&
        css`
            color: #004085;
            background-color: #cce5ff;
            border-color: #b8daff;
        `}
`;


export const AlertIcon = styled(AlertSVG)`
        height: 30px;
        width: 30px;
        margin: 10px 20px;
`;

export const Text = styled.p`
         font-size: 13px;
    `;
