import styled from "styled-components";


export const ContainerDownload = styled.div`
    width: 500px;
    padding: 25px;
    text-align: center;
    & h1{
        font-size: 40px;
        font-weight: 800;
        line-height: 40px;
        color: #fff;
        margin-bottom: 10px;
        @media (max-width: 600px) {
            font-size: 24px;
            line-height: 30px;
        }
    }
    & p{
        font-size: 16px;
        line-height: 25px;
        color: #fff;
        margin-bottom: 10px;
        @media (max-width: 600px) {
            font-size: 14px;
            line-height: 20px;
        }

    }
    & button {
        width: 150px;
        height: 40px;
        border-radius: 20px;
        border: none;
        background-color: #3639AE;
        color: #fff;
        font-size: 10px;
        font-weight: bold;
        margin-bottom: 10px;
        @media (max-width: 600px) {
            width: 120px;
            height: 35px;
            font-size: 8px;
        }
        @media (max-width: 600px) {
        padding: 15px;
    }
    }
`;
