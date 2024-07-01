import styled from "styled-components"



export const FooterWraper = styled.div`
padding: 80px;
background-color: #1b2a4e;
line-height: 30px;
font-weight: 500;
font-size: 15px;
width:120%;
`;


export const Container = styled.div`
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
`;



export const Row = styled.div`
display: flex;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;
width:100%;
`;


export const BottomLogo = styled.div`
display: flex;
flex-direction:column;
width:289px;
height:200px;
line-height: 30px;
font-weight: 400;
font-size: 14px;
margin-right: 10%;
color: #8686b5;
`;

export const ImageLogo = styled.img`
width: 160px;
height:28px;
`;

export const Paragraph = styled.p`
line-height: 30px;
font-weight: 400;
font-size: 14px;
margin-right: 10%;
color: #8686b5;
`;

export const BottomContainer = styled.div`
display:flex;
align-items: center;
margin-right:0;
justify-content:space-between;
gap:5%;
`;

export const UnorderList = styled.ul`
display:flex;
flex-direction:row;
gap:15px;
box-sizing: border-box;
padding:0;
align-items:flex-start;
margin-top: 0;
`;

export const List = styled.li`
list-style: none;
margin:none;

`;

export const Img = styled.img`
width:30px;
height:30px;
background-color:white;
border-radius:50%;
border-color: #1b2a4e;

`;

export const BottomWidget = styled.div`
display: flex;
flex-direction: column;
width:169px;
height: 200px;
`;

export const WidgetTitle = styled.h4`
font-size: 16px;
font-weight: 600;
color: #fff;
margin-top:0;
`;

export const ContentParagraph =styled.div`
`;

export const Li =styled.li`
color: #8686b5;
font-weight: 400;
font-size: 14px;
list-style: none;
`;

export const LowerFooter = styled.div`
border-top: 1px solid #223461;
background: #1b2a4e;
display: flex;
justify-content: space-between;
align-items: center;  
width: 100%;  
padding: 10px; 
`;

export const Copyright = styled.p`
font-size: 13px;
`;

export const Design =styled.p`
font-size: 13px;
`;
