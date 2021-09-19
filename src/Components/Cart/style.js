import styled from "styled-components";

export const CartContainer = styled.div`
    width: 100%;
    grid-column: 2;
    background-color: white;
    height: fit-content;
    padding: 32px;
    border-radius: 8px;

    .done{
        width: 100%;
        background-color: #ff2351;
        color: white;
        font-weight: 600;
        font-size: 1.125rem;
        padding: 8px;
        border-radius: 8px;
    }
    .total{
        text-align: end;
        margin: 12px;
        font-weight: 600;
    }
`
export const CartItem = styled.li`
    display: grid;
    grid-template-columns: 1fr 3fr 3fr 1fr;
    align-items: center;
    gap: 12px;
    font-size: .85rem;
    padding: 8px;
    border-bottom: 1px solid #dadada;

    .qt{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.2rem;
        font-weight: 600;

        button{
            font-family: "Poppins";
            font-size: 1.2rem;
            font-weight: 600;
            border: none;
            background-color: transparent;
            cursor: pointer;
        }
        span{
            margin: 0 8px;
        }
    }
    .img{
        height: 70px;
        text-align: center;
        padding: 6px;
    }
    img{
        height: 100%;
    }
    .title{
        text-align: right;
    }
    .price{
        text-align: end;
        font-weight: 600;
        font-size: 1rem;
    }
`