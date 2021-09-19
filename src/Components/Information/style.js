import styled from "styled-components";

export const Container = styled.main`
    background-color: white;
    padding: 32px;
    border-radius: 8px;
    margin-right: 32px;
    display: grid;
    grid-template-columns: 1fr;
`
export const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 8px;
    width: 100%;

    .btn{
        width: 100%;
        margin: 12px 0;
    }
    button{
        width: 100%;
        background-color: #ff2351;
        color: white;
        font-weight: 600;
        font-size: 1.125rem;
        padding: 8px;
        border-radius: 8px;
    }
`