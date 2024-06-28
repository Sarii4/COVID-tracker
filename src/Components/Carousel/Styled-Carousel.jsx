import styled from "styled-components";



export const Card = styled.div`
    background-color: #fff;
    height: 250px;
    width: 300px;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    & h1{
        margin:0;
        color: #333;
        font-size:24px
    }
    & p{
        color: #333;
        font-size: 14px;
    }
    & img{
        height: 55px;
    }
`
export const ContenedorCarousel = styled.div`
display:flex;
flex-direction:row;
`