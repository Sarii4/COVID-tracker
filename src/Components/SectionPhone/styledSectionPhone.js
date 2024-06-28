import styled from "styled-components"

export const Phone = styled.div`
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    & img{
        height: 520px;
        @media (max-width: 600px){
            height: 150px;
            flex-direction: column;
            }
    }
`




