import styled from "styled-components";



export const Card = styled.div`
    background-color: #fff;
    height: auto;
    width: 255px;
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
        width: 55px;
    
    @media (max-width: 600px) {
        width:55px;
}}
    @media (max-width: 600px) {
        width:80%;
        display:flex;
        flex-direction:column;
        }
`