import styled from "styled-components";

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
    }
`

export const Section5 = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    flex-direction: column;
`



export const Section6 = styled.div`
    display: flex;
    justify-content: center;
    height: 450px;
    margin-top: 250px;
    background: linear-gradient(to right, #1e0c9d, #06cdec);
    
    margin-left: 20%;
    padding: 20px;
    border-radius: 10px;
    & div{
        position: relative;
        & img{
            position: absolute;
            bottom: 50px;
            right: 40px;
            height: 500px;
        }
        & button{
            background-color: #fff;
            color: #000;
            border-radius: 5px;
            height: 50px;
            width: 160px;
        }
    }
`

export const Section7 = styled.div`
    height: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    gap: 30px;
    margin-bottom: 60px;
    
`
