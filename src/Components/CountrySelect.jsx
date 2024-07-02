import React from 'react'
import styled from 'styled-components'

const Select =styled.select`
display: flex;
width: 300px;
height: 50px;
background-color: #ffffff;

`;

{topTencountries?.map((el) => 
    <TopTen key={0} flag={el?.countryInfo?.flag} country={el?.country} value={el?.cases}/> )}; 


const CountrySelect = (country) => {

    return (
    <Select name="countries" >
        {
            countries?.map((el) => (
                <option key={el?.id} value= {el?.id} > {el?.country} </option>

            
            )
        )
        }


    </Select>
    )
}

export default CountrySelect