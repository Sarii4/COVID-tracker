import styled from "styled-components"




export const BurguerContainer = styled.section`
    display:flex;
    align-items:center;
    width: 30%;
    height: 30%;
    display: none;
    @media (max-width:768px) {
    display: flex;
    justify-content:flex-end;
    margin-right:5%;
    } 



    
`;
export const BurguerImage = styled.img`
width:5%;
`;