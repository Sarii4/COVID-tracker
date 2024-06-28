import styled from "styled-components"

export const Phone = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    & img{
        height: 520px;
        @media (max-width: 600px) {
        max-height: 520%;
        align-items: center;
    }
    }
`




