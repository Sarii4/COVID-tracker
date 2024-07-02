import { useState } from 'react';
import CountryData from '../Components/CountryData';
//import CountrySelect from '../Components/CountrySelect';
import DataFooter from '../Components/DataFooter';
import useApi from '../services/useApi';
import { API_WORLD_TOTAL, API_COUNTRY_TOTAL } from '../config/urls';
import "./tracker.css"

const Tracker1 = () => {
  const dataTotal = useApi(API_WORLD_TOTAL);
  console.log(dataTotal);
  const dataCountries = useApi(API_COUNTRY_TOTAL);
  console.log(dataCountries);
  const countries = dataCountries.data;
  const sortedCountries = countries?.sort((a, b) => a?.country.toLowerCase().localeCompare(b?.country.toLowerCase()));
  const topTencountries = sortedCountries?.slice(0, 10)
  console.log(topTencountries);
  //const [country, setCountry] = useState();
  //const handlerSelectCountry = function(e){     onClick={handlerSelectCountry} 
 // const option= e.target.value;

  return (
    <>
        <header>
          <select name="countries" >
              {sortedCountries?.map((el) => ( 
              <option key={el?.id} value= {el?.id} > {el?.country} </option> ))};
           
          </select>
          <h2>Updated: February 31, 2022</h2>
        </header>
        <br/>
        <hr/>
        <div className='displayCountry'>
          <div className='dataCountry'>
           {/* //{sortedCountries?.map((el) =>  */}
            <CountryData 
            title="Total Cases" key="{el?.country}" value="{el?.cases}" color="#3639ac" virus="../../images/covid-defult.svg" /> 
            <CountryData 
            title="Total Deaths" value="el?.deaths" color="#ff0000" virus="../../images/covid-red.svg" />
            <CountryData 
            title="Total Recovered" value="{el?.cases}" color="#82c519" virus="../../images/covid-green.svg"/>
            <CountryData 
            title="Total Active" value="{el?.active}" color="#2c6dff" virus="../../images/covid-blue.svg"/>
            <CountryData 
            title="New Cases" value="{el?.todayCases}" color="#ff6a07" virus="../../images/covid-orange.svg"/>
            <CountryData 
            title="New Deaths" value="{el?.todayDeaths}" color="#b70202" virus="../../images/covid-redark.svg"/>
          
          </div>
          <img src="../images/mapamundi.png"></img>
        </div>
        <br/>
        <footer>
          <DataFooter title="Total Confirmed" value={dataTotal.data?.cases} color="#3639ac" virus="../../images/covid-defult.svg"/>
          <DataFooter title="Total Recovered" value={dataTotal.data?.recovered} color="#82c519" virus="../../images/covid-green.svg"/>
          <DataFooter title="Total Deaths" value={dataTotal.data?.deaths} color="#ff0000" virus="../../images/covid-red.svg" />
          <DataFooter title="New Deaths" value={dataTotal.data?.todayDeaths} color="#b70202" virus="../../images/covid-redark.svg"  />
          <DataFooter title="Help Line No." value="198" color="#1a1662" virus="../../images/call.svg"  />
        </footer>
            
        </>
  
  )
}

export default Tracker1

