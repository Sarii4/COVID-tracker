import React from 'react'
import styled from 'styled-components'

const CountryInfo = styled.div`
    background-color: #ffffff;
    background-image: url("../../images/icons/covid-blue.svg") ;
    opacity:20%;
    background-size: 200px 200px;
    background-repeat: no-repeat;
    background-position: 145px -40px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 265px;
    height: 120px;
    margin-bottom: 10px;
    border-radius: 5px;
    color: #1A1662;

    &:hover{
    animation: logo-spin infinite 10s linear;
    @keyframes logo-spin {
    from { transform: rotate(0deg);}
    to { transform: rotate(360deg); }
    }
}`

const CountryData = ({title, value}) => {

  return (
    <CountryInfo>
        <h2>{title}</h2>
        <h2>{value}</h2>
    </CountryInfo>
  )
}

export default CountryData