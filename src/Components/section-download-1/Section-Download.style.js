import styled from 'styled-components';




export const SectionAbsoluteContainer = styled.section`
display:flex;
justify-content:center;
margin:0 auto;

`;

export const SectionTotalContainer = styled.div` 
background-color: #254179 ;
display: flex;
flex-direction: row;
width: 1024px;
max-width: 1200px;
height: 850px;
justify-content: space-between;
align-items: flex-start;
padding:30px;
background: linear-gradient(to bottom, #4e90b6, #235e8d, #203e75, #20346d, #181251);
margin-top:5%; 


`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width : 1200px;
  height: auto;
  padding: 20px;
  margin: 0 auto;
  align-items: flex-start;
  position: relative;

  `;

export const Title = styled.h1`
  font-size: 40px;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.1;
  text-align: left;
  text-size-adjust: 100%;
  width: 450px; 
  height: 150px; 
  margin-bottom: 15px;
  color: #ffffff;
  margin: 10px 0 0 30px;

`;

export const Description = styled.p`
  font-size: 13px;
  margin-bottom: 20px;
  text-align: left;
  color: #ffffff;
  line-height: 1.5;
  max-width: 420px;
  margin: 40px 0 0 30px;
  
`;

export const StyledButton = styled.button`
  color: rgb(255, 255, 255);
  background-color: rgb(18, 17, 88); 
  border: 1px solid rgb(54, 57, 174); 
  border-radius: 30px;
  margin: 30px 0 0 35px; 
  cursor: pointer; 
  outline: none; 
  font-size: 12px;
  font-weight: bold;
  padding: 15px 50px; 
  margin: 40px 0 0 40px;
  height:60px ;
  &:hover {
    border-color: rgb(18, 17, 88); 
    
  }

  
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: auto;
  display: flex; 
  align-items: center;
  transform: translateY(30%);
  left: 0;
  margin-left: 30px;
`;

export const StyledImage = styled.img`
  height: 422.91px;
  width: 350px;
  margin: 0 0 85px 0px;
  float: right;
  position: relative; 
  top: -120px;
`;

export const SponsorContainer = styled.div`
background-color: blue;
display: flex;
justify-content: center;
 position: absolute; 
  bottom: 250px; 
  width: 900px;
  height: 80px; 
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 10px;
  //margin-top: 50%;
  border-radius: 5px;
  margin: 10px 0px -100px 45px;


`;

export const StyledSponsor0 = styled.img`
max-height: 100%;
object-fit: contain;
margin-left: 10px; 
`;


export const StyledSponsor1 = styled.img`
max-height: 100%;
object-fit: contain;
margin-left: 10px; 
`;


export const StyledSponsor2 = styled.img`
max-height: 100%;
object-fit: contain;
margin-left: 10px; 
`;

export const StyledSponsor3 = styled.img`
max-height: 100%;
object-fit: contain;
margin-left: 10px; 
`;


export const StyledSponsor5 = styled.img`
max-height: 100%;
object-fit: contain;
margin-left: 10px; 
`;
export const StyledSponsor4 = styled.img`
max-height: 100%;
object-fit: contain;
margin-left: 10px; 
`;


export const ContainerButtons = styled.div` 
display: flex;
flex-direction: column;
align-items: flex-start;
position: absolute;
bottom: 0;
left: px;
width: 200px;
height: 450px; 
padding-left: 0.5px;

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