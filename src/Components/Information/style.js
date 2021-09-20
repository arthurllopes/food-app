import styled from "styled-components";

export const Form = styled.form`
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 32px;
    width: 90%;

    .user{
        margin-bottom: 12px
    }
    h2{
        margin-bottom: 12px;
    }
    
    .btn{
        width: 60%;
        margin-top: 12px ;
        align-self: center;
    }
    button{
        width: 100%;
        background-color: #ff2351;
        color: white;
        font-weight: 600;
        font-size: 1.125rem;
        padding: 12px;
        border-radius: 8px;
    }
`