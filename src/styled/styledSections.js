import styled from "styled-components";


export const Titulos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 30px;
    padding-left: 40px;
    & h2{
        color: white;
        font-size: 20px;
    }
    & h1{
        margin-top: -10px;
        font-weight: bold;
        @media (max-width: 600px){
        font-size: 25px;
        
    }
    }
    
`
export const SectionCarousel = styled.div`
    width:100%;
    height:250px;
    display: flex;
    justify-content: center;
    margin-bottom:30px;
`



export const Section5 = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 110%;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 50px;
    padding-left: 320px;
    flex-direction: column;
    @media (max-width: 600px) {
        width: 100%;
        padding-left: 0;
    }
`;

export const Section6 = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 450px;
    margin-top: 250px;
    background: linear-gradient(to right, #1e0c9d, #06cdec);
    margin-left: 20%;
    padding: 20px;
    border-radius: 10px;
    @media (max-width: 600px){
    margin-top: 0;
    margin-left: 15px;
    margin-right: 15px;
    padding: 0;
    height: auto;
    flex-direction: column;
}
    
    
    & div{
        position: relative;
        flex: 1;
        @media (max-width: 600px) {
            width: 100%;
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }}
        & img{
            position: absolute;
            bottom: 50px;
            right: 50px;
            height: 520px;
            @media (max-width: 600px){
                position: static;
                height: 250px;
                display: block;
                margin: 0 auto;
            }
        }
        & button{
            background-color: #fff;
            color: #000;
            border-radius: 5px;
            height: 50px;
            width: 160px;
            @media (max-width: 600px) {
                width: 50%;
                margin: 0 auto;
                display: block; 
            }
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
