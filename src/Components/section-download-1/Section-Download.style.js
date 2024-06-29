import styled from 'styled-components';





export const SectionTotalContainer = styled.div` 
background-color: #254179 ;
display: flex;
flex-direction: column;
width: 100%;
height: 100px;
justify-content: space-between;
align-items: center;
padding:20px;
background: linear-gradient(to bottom, #4e90b6, #235e8d, #203e75, #20346d, #181251); 


@media (min-width: 768px) {
    flex-direction: row;
    height: 844px;
    padding: 30px;
  }

  @media (min-width: 1440px) {
    height: 900px;
  }

`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  align-items: flex-start;
  position: relative;

  @media (min-width: 768px) {
    width: 60%;
    padding: 20px;
    margin: 0 auto;
  }

  `;

export const Title = styled.h1`
  font-size: 40px;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.1;
  text-align: left;
  margin-bottom: 15px;
  color: #ffffff;
  margin: 10px 0px;

  @media (min-width: 768px) {
    font-size: 40px;
    width: 450px; 
    height: 150px;
    margin: 10px 100px 0;
  }

`;

export const Description = styled.p`
  font-size: 14px;
  text-align: left;
  color: #ffffff;
  line-height: 1.5;
  line-height: 1.5;
  margin: 20px 0;
  
  @media (min-width: 768px) {
    margin: 40px 100px 0;
    max-width: 420px;
  }
  
`;

export const StyledButton = styled.button`
  color: rgb(255, 255, 255);
  background-color: rgb(18, 17, 88); 
  border: 1px solid rgb(54, 57, 174); 
  border-radius: 30px;
  cursor: pointer; 
  outline: none; 
  font-size: 14px;
  font-weight: bold;
  padding: 15px 30px; 
  margin: 20px 0 ;
  &:hover {
    border-color: rgb(18, 17, 88); 
    
  }


  @media (min-width: 768px) {
    padding: 15px 50px;
    margin: 40px 120px 0;
  }
  
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex; 
  align-items: center;
  justify-content: flex-start;
  margin-top: 300px;
 margin-left: 0;


  @media (min-width: 768px) {
    width: 50%;
    justify-content: flex-end;
    align-items: center;
    margin-left: 30px;
  }
`;

export const StyledImage = styled.img`
  height: 200px;
  width: 100%;
  margin: 0 ;
  max-width: 350px;
  top: -120px;

  @media (min-width: 768px) {
    height: 422.91px;
    width: 350px;
    margin: 0 0 85px 0px;
    position: relative;
    top: -120px;
  }


`;

export const SponsorContainer = styled.div`
display: flex;
justify-content: center;
  width: 100%;
  height: 60px; 
  align-items: center;
  background-color: white;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  flex-wrap: wrap;
  


  @media (min-width: 768px) {
    position: absolute;
    bottom: -1550px;
    width: 900px;
    height: 80px;
    margin: 20px 60px -95px 120px;
  }

`;

const StyledSponsor = styled.img`
  max-height: 100%;
  object-fit: contain;
  margin: 0 10px; 
`;

export const StyledSponsor0 = styled(StyledSponsor)`
  margin-left: -400px;
`;


export const StyledSponsor1 = styled(StyledSponsor)`
   margin-left: -100px;
`;

export const StyledSponsor2 = styled(StyledSponsor)`
   margin-left: -100px;

`;

export const StyledSponsor3 = styled(StyledSponsor)`
  /* No se especifica margen izquierdo, usa el valor predeterminado de 10px */
`;


export const StyledSponsor5 = styled(StyledSponsor)`
  /* No se especifica margen izquierdo, usa el valor predeterminado de 10px */
`;


export const StyledSponsor4 = styled(StyledSponsor)`
  margin-left: -650px;
`;


export const ContainerButtons = styled.div` 
display: flex;
  flex-direction: row; 
  justify-content: space-around;
  width: 100%;
  padding: 10px 0;


  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    bottom: -1555px;
    left: 80px;
    width: 200px;
    height: 100px;
    padding-left: 0.5px;
  }
`;

export const StyledShare = styled.img`
width: 45px;
height: 45px;
cursor: pointer;
margin: -20px 0px 10px -20px;
  
`;


export const StyledSupport = styled.img`
width: 45px;
height: 45px;
cursor: pointer;
margin: 0px 0px 10px -20px;
  
`;


export const StyledCart = styled.img`
width: 45px;
height: 45px;
cursor: pointer;
margin: 0px 0px 10px -20px;
  
`;