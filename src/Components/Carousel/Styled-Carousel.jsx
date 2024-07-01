import styled from "styled-components";



export const Card = styled.div`
    background-color: #fff;
    height: 250px;
    width: 300px;
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    transition: transform 0.2s;
    margin-bottom:20%
    overflow: hidden;
    &:hover {
        transform: scale(1.05);
    }
    & h1{
        margin:0;
        color: #333;
        font-size:120%
    }
    & p{
        color: #333;
        font-size: 90%;
    }
    & img{
        height: 55px;
    }
    @media (max-width: 600px) {
        display:flex
        flex-direction:column;
        }
`