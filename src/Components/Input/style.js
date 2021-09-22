import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 8px 0;

    input{
        border: 1px solid #dadada;
        display: block;
        width: 100%;
        font-size: 16px;
        padding: 12px 16px;
        border-radius: 8px;
        background: transparent;
    }
    input::placeholder {
        font-family: 'Poppins';
        font-size: 16px;
        color: #848484;
    }
    label {
        display: block;
        font-weight: 500;
        line-height: 1;
        padding-bottom: 8px;
        font-weight: 600;
    }
`