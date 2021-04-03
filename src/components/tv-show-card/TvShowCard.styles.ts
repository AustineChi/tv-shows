
import styled from "styled-components";
import {Link} from "react-router-dom"

export const Listitem = styled(Link)`
        text-decoration: none;
        width: 230px;
        background: #f5f5f5;
        box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
        0 3px 1px 0 rgba(20, 23, 28, 0.1);
        margin: 1rem;
        cursor: pointer;
        display: inline-block;
        &:hover {
            transform: scale(1.03);
        }
`;


export const ListitemInfo  = styled.div`
        color: #eee;
        text-align: center;
`;

export const InfoName = styled.h4`
        font-size: 1rem;
        padding: 5px;
`;

export const InfoRating  = styled.h4`
        color: orange;
        padding: 5px;
`;

export const TvShowImage  = styled.img`
         width: 100%;
         height: 200px;
         object-fit: cover;
         &:hover {
             object-fit: contain;
     }
`;
