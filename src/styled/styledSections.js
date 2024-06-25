import styled from "styled-components";

export const Section5 = styled.div`
    display: flex;
    margin-top: 0px;
    padding: 60px 120px;
    justify-content: center;
    height: 80vh;
    align-items: center;

`;



export const Section6 = styled.div`
    display: flex;
    justify-content: center;
    height: 450px;
    margin-top: 250px;
    background: linear-gradient(to right, #1e0c9d, #06cdec);
    width: 60%;
    margin-left: 20%;
    padding: 20px;
    border-radius: 10px;
    & div{
        position: relative;
        & img{
            position: absolute;
            bottom: 50px;
            right: 50px;
            height: 520px;
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