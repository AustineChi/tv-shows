
import styled from "styled-components";

export const Searchbarwrapper = styled.div`
        background-color: #edf0f1;
        padding: 50px;
        width: 100%;

`;

export const SearchbarForm = styled.form`
       display: flex;
       width: 100%;
       height: 100px;
       flex-direction: column;
       align=items: center;
       justify-content: center;

`;

export const TextInput = styled.input`
        width: 100%;
        padding: 14px 7px;
        margin: 25px 0 0;
        font-size: 16px;
        border: 0;
        border-radius: 2px;
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 16%), 0 0 0 1px rgb(0 0 0 / 8%);
        outline: none;
    `;

export const SubmitButton = styled.button`
        padding: 10px;
        margin-top: 30px;
        font-weight: 700;
        text-align: center;
        width: 100%;
        border-radius: 100px;
        background-color: #32373b;
        color: #eee;
        outline: none;
        cursor: pointer;
        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3)
        }
        &:active {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            transform: translateY(4px);
        }
    `;

