import styled from "styled-components"

export const AbsoluteContainer = styled.section`
margin-top:5%;
margin-bottom: 5%;
display:flex;
flex-direction:column;


`;

export const TotalContainer = styled . div`
display:flex;
justify-content: space-around;
background-color: #171133;
padding-bottom:35px;

`;
export const ItemContainer = styled . div`
display: flex;
justify-content: space-between;

@media(max-width:600px){
flex-direction:column;
justify-content: center;



}

`; 

export const PhoneContainer = styled .div`
display: flex;
align-items: center;
justify-content: center;
margin-left:10%;
margin-top:3%;

`;
export const ImagePhone = styled . img`
width: 575px;
height:520px;
margin-left:-55px;
@media(max-width:600px){
margin-left:20%;
width: 575px;
height:520px;
}

`; 

export const TextContainer = styled. div`
display: flex;
flex-direction: column;
width:650px;
height:600px;
margin-top:10%;
padding:5px;
margin-left:50px;
gap:3%;
@media(max-width:600px){
margin-left:30%;

}
`;

export const Number = styled .h3`
font-size:40px;
margin:0;
color:white;
`;

export const Title = styled .h1`

margin-bottom:0;
font-family: 'Poppins', sans-serif;
font-size: 50px;
font-weight: 800;
line-height: 60px;
color: #fff;
letter-spacing: 1px;

`;


export const Paragraph = styled .p`
margin-bottom:0;
font-size: 20px;
line-height: 25px;
color: #fff;
`;

export const ListContainer = styled .div`
display:flex;
justify-content: space-evenly;
align-items:center;
background-color:#171133;
padding-left:40px;
padding-right:40px;
box-sizing: border-box;
width:100%;


@media(max-width:600px){
display:none;


}

`;

export const BoxContainer = styled .div`
display:flex;
flex-direction:column;
align-items:center;

`;


export const Button = styled.button`
display: inline-block;
padding: 20px 40px;
background-color:#3639AE;
font-weight: 600;
font-size: 12px;
text-transform: uppercase;
letter-spacing: 1px;
border: 1px solid transparent;
border-radius:6px ;
width:200px;
height:59px;
margin-top:15px; 
color:white  ;

`;

export const ImagePadlock = styled.img`
width:30px;
height: 30px;
margin:0;

`;

export const ImageUp = styled.img`
width:30px;
height: 30px;
`;

export const ImageCrown = styled.img`
width:40px;
height: 40px;
`;


export const ImageHeart = styled.img`
width:30px;
height: 30px;
`;

export const LeyendNumber = styled.h2`
font-size:12px;
color:white;

`;



