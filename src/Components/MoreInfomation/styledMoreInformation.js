import styled from 'styled-components';

export const Container6 = styled.div`
    display: flex;
    position: relative;
    width: 60%;
    padding: 10px;
    @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
    }
    & img{
        height: 110px;
        @media (max-width: 600px) {
            height: auto;
            width: 80%;
            margin-bottom: 10px; 
        }
    }
    & button{
        background-color: transparent;
        color: #fff;
        border: none;
        position: absolute;
        top: 0;
        right: -100px;
        text-decoration: underline;
        cursor: pointer;
        @media (max-width: 600px) {
            position: static;
            text-align: left;
            margin-top: 10px; 
            width: auto;
        }
    }
    & div{
        margin-left: 30px;
        @media (max-width: 600px) {
            margin-left: 0;
            width: 100%;
        }
        & h3{
            color: #b0b0b0;
            font-weight: 100;
            margin-top: 5px;
            font-size: 15px;
            @media (max-width: 600px) {
                margin-top: 10px; 
            }
        }
        & p{
            font-weight: 900;
            margin-top: 0px;
            @media (max-width: 600px) {
                margin-top: 5px; 
            }
        }
    }
`;
