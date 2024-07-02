import React from 'react'
import styled from 'styled-components'

const CountryInfo = styled.div`
    background-color: #ffffff;
    //background-image: url("../../images/covid-defult.svg") ;
    
    //background-size: 200px 200px;
    //background-repeat: no-repeat;
    //background-position: 145px -40px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: 265px;
    height: 120px;
    margin-bottom: 20px;
    border-radius: 5px;
    color: #1A1662;
    &:hover{
      translate: 0px -10px;
    }
    & h1{
      color: ${(props => props.color)};
    }
`;

const Virus = styled.img`
    position: relative;
    opacity: 80%;
    size: 150px 150px;
    translate: 145px -40px;
    overflow: hidden;
    z-index: 2;

    & :hover {
    animation: logo-spin infinite 10s linear;
    @keyframes logo-spin {
    from { transform: rotate(0deg);}
    to { transform: rotate(360deg); }
      }
    }
    `;

const CountryData = ({title, value, virus, color}) => {

  return (
    <CountryInfo color={color}>
        <Virus src={virus}></Virus>
        <h2>{title}</h2>
        <h1>{value}</h1>
    </CountryInfo>
  )
}

export default CountryData