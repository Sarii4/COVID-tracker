import styled from "styled-components";



export const Card = styled.div`
    background-color: #fff;
    height: 280px;
    width: 300px;
    margin: 30px;
    padding: 15px;
    border-radius: 5px;
    & h1{
        color: #333;
    }
    & p{
        color: #333;
        font-size: 15px;
    }
    & img{
        height: 55px;
    }
`
export const ContenedorCarousel = styled.div`
display:flex;
flex-direction:row;
`