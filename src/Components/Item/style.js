import styled from "styled-components";

export const ItemContainer = styled.div`
    background-color: #fff;
    padding: 24px;
    margin: 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    max-width: 280px;

    img {
        align-self: center;
        padding: 8px;
        width: 100%;
    }
    .description {
        color: #848484;
        font-weight: 300;
        font-size: .85rem;
        margin-top: 8px;
    }
    .price {
        font-weight: 600;
        font-size: 18px;
        margin-top: 8px;
        color: #fdc844;
    }
    .offer {
        top: 8px;
        right: 12px;
        position: absolute;
        align-self: flex-end;
        margin-bottom: 12px;
        background-color: #ff2351;
        color: #fff;
        padding: 2px 8px;
        border-radius: 8px;
    }
    animation: enterLeft ease 1s forwards;

    @keyframes enterLeft {
        from {
            opacity: 0;
            transform: translateX(-60px); 
        }
        to {
            opacity: 1;
        }
    }
    
`