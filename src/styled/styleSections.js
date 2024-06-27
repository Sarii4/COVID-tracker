import styled from "styled-components";

export const SectionCarousel = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const Titulos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 30px;
    & h2{
        color: white;
        font-size: 14px;
    }
    & h1{
        margin-top: -10px;
        font-weight: bold;
        color: white;
    }
`
export const Body = styled.div`
background-color:#171133;
`