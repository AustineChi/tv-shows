
import styled from "styled-components";
import {Link} from "react-router-dom"
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";

export const NavBarWrapper = styled.div`
        padding: 6px;
        height: 60px;
        box-sizing: border-box;
        background-color: #d7e0c9;
`;


export const Container = styled.div`
        max-width: 1170px;
        margin: auto;
        display: flex;
        align-items: center;
        flex-shrink: 0;
        height: 100%;
`;

export const Nav = styled.nav`
        margin-left: auto;
        display: flex;  
        align-items: center
`;

export const NavLink = styled(Link)`
        padding: 7px 20px;
        color: rgb(250, 74, 132);
        font-weight: 700;
        font-size: 12px;
        &: hover {
            background-color: rgb(126, 81, 255);
            color: #fff
        }
`;

export const LogoWrapper = styled.div`
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
`

export const Logo = styled(LogoSVG)`
    height: 40px;
    width: auto;

`;

export const SearchBox = styled.input`
        width: 100%;
        border: 0;
        outline: 0;
        padding:  7px 12px;
        height: 35px;
        margin: 8px;
        padding-bottom: 0;
        border-bottom: 2px solid #d3d3d3;
        box-shadow: none;
        background-color: #fff;
        color: #111;
`