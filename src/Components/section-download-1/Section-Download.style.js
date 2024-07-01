import styled from 'styled-components';

export const SectionTotalContainer = styled.div`
  background: linear-gradient(to bottom, #4e90b6, #235e8d, #203e75, #20346d, #181251);
  display: flex;
  flex-direction: column;
  width: 100vw; 
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0; 
  box-sizing: border-box; 
  

@media (min-width: 390px) {
height: 100vh;
flex-direction:row;



}
  @media (min-width: 600px) {
    flex-direction: row;
    height: 100vh;
    padding: 30px;
  }

  @media (min-width: 1440px) {
    height: 650px;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
  margin-top: 142px;
  align-items: flex-start;
  position: relative;
  box-sizing: border-box;
  margin-left: -10px;


  @media (min-width: 390px) {
    width: 90%; 
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 600px) {
    width: 60%; 
    padding: 20px;
    margin-top: -30px;
    margin-left: -10px; 
  }

  @media (min-width: 1440px) {
    width: 50%; 
    padding: 30px;
    margin-top: -148px;
    margin-left: 30px;
  }

`;

export const Title = styled.h1`
  font-size: 28px; 
  font-family: Poppins, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.1;
  text-align: left;
  margin-bottom: 15px;
  color: #ffffff;
  margin: 0px 0px;
  box-sizing: border-box;

  @media (min-width: 390px) {
    font-size: 32px; 
  }


  @media (min-width: 600px) {
    font-size: 40px;
    width: 450px; 
    height: 150px;
    margin: 10px 100px 0;

    @media (min-width: 1440px) {
    font-size: 40px; 
    width: 450px;
    height: 150px;
    margin: 10px 100px 0;
  }
  }
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: left;
  color: #ffffff;
  line-height: 1.5;
  margin: 20px 0;
  box-sizing: border-box;

  @media (min-width: 390px) {
    font-size: 16px; 
  }
  
  @media (min-width: 600px) {
    margin: 40px 100px 0;
    max-width: 420px;
  }

  @media (min-width: 1440px) {
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
  margin: 20px 0;
  box-sizing: border-box;

  &:hover {
    border-color: rgb(18, 17, 88); 
  }
  @media (min-width: 390px) {
    padding: 15px 40px; 
  }


  @media (min-width: 600px) {
    padding: 15px 50px;
    margin: 40px 120px 0;
  }

  @media (min-width: 1440px) {
    padding: 20px 60px; 
    margin-top: 60px; 
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex; 
  align-items: center;
  justify-content: center;
  margin-top: 330px;
  margin-right: 50px;
  box-sizing: border-box;


  @media (min-width: 390px) {
    margin-top: 250px; 
    max-width:100%;
    height: auto;
    object-fit: cover;
  }


  @media (min-width: 600px) {
    width: 50%;
    justify-content: flex-end;
    align-items: center;
    margin-right: 200px;
  }

  @media (min-width: 1440px) {
    margin-top: 150px; 
  }

`;

export const StyledImage = styled.img`
  height: 200px;
  width: 100%;
  margin: 0;
  max-width: 350px;
  top: -120px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    height: 422.91px;
    width: 350px;
    margin: 0 0 85px 0px;
    position: relative;
    top: -75px;
  }
`;

export const SponsorContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 80%;
  height: auto; 
  min-height: 100px;
  align-items: center;
  background-color: white;
  padding: 10px;
  margin-top: 2000px;
  border-radius: 5px;
  flex-wrap: wrap;
  box-sizing: border-box;
  
  @media (min-width: 390px)and (max-width: 1439px) {
    justify-content: center;
    flex-direction:row;
    flex-wrap: wrap;
    padding: 10px ;
  }
  @media (min-width: 600px) {
    position: absolute;
    flex-direction: row;
    justify-content: center;
    width: 90%; 
    height: auto; 
    max-width: 900px;
    top: 2150px; 
    left: 28%;
    transform: translateX(-20%); 
    margin: 0 auto; 
    padding: 10px;
 
  }

  @media (min-width: 1440px) {
    width: 900px; 
    justify-content: space-around;
    flex-direction: row; 
    align-items: center;
    margin: 0 ; 
    margin: 0 auto;
    max-width: 900px; 
    padding: 10px;
  }
`;
const StyledSponsor = styled.img`
  width: 75px;
  height: 75px;
  object-fit: contain;
  margin: 3px 10px; 
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 100px; 
    height: 100px;
  }

  @media (min-width: 1440px) {
    width: 100px; 
    height: 100px;
    margin: -5px;
  }
`;

export const StyledSponsor0 = styled(StyledSponsor)``;

export const StyledSponsor1 = styled(StyledSponsor)``;

export const StyledSponsor2 = styled(StyledSponsor)``;

export const StyledSponsor3 = styled(StyledSponsor)``;

export const StyledSponsor5 = styled(StyledSponsor)``;

export const StyledSponsor4 = styled(StyledSponsor)``;

export const ContainerButtons = styled.div` 
  display: flex;
  flex-direction: row; 
  justify-content: space-around;
  width: 100%;
  padding: 0;
  box-sizing: border-box;

  @media (min-width: 390px) {
    justify-content: flex-end; 
    padding-right: 20px; 
  }

  @media (min-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 20px;
    left: 200px;
    width: 200px;
    height: 100px;
    padding-left: 0.5px;
  }

  @media (min-width: 1440px) {
    right: auto; 
    left: 55px; 
    width: 200px; 
    height: 100px;
    top: 2100px;
    flex-direction: column;
  }
`;

export const StyledShare = styled.img`
  width: 55px;
  height: 55px;
  cursor: pointer;
  margin: 10px;
`;

export const StyledSupport = styled.img`
  width: 55px;
  height: 55px;
  cursor: pointer;
  margin: 10px;
`;

export const StyledCart = styled.img`
  width: 55px;
  height: 55px;
  cursor: pointer;
  margin: 10px;
`;