import styled from "styled-components";

export const ListContainer = styled.div`
    grid-column: 1;
    display: grid;
    width: 85%;
    grid-template-columns: 1fr 1fr;
    .title{
        grid-column: 1/3;
        margin-bottom: 12px;
    }
`