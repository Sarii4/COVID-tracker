import { useState } from 'react'
import DataBar from './components/common/aside/DataBar'
import TopTen from './components/common/aside/TopTen'
import SideBar from './components/common/sidebar/SideBar'
//import getData from "./services/getData";
import useApi from './services/useApi';
import { API_WORLD_TOTAL, API_COUNTRY_TOTAL } from './config/urls';
import './App.css'
import CountryData from './components/CountryData';
import CountrySelect from './components/CountrySelect';
import DataFooter from './components/DataFooter';

function App()  {

  const dataTotal = useApi(API_WORLD_TOTAL);
  console.log(dataTotal);
  const dataCountries = useApi(API_COUNTRY_TOTAL);
  console.log(dataCountries);
  const countries = dataCountries.data;
  console.log(countries);
  //const countriesWithCases = countries?.filter(country => country.cases);
  //console.log(countriesWithCases);
  const sortedCountries = countries?.sort((a, b) => b.cases - a.cases);
  console.log(sortedCountries);
  const topTencountries = sortedCountries?.slice(0, 10)
  console.log(topTencountries);

  //console.log(Country(2).country);

      
  return (
    <>
      <nav>
        <SideBar/>
      </nav> 
      <aside>
        <h1>COVID-19 Tracker</h1>
        <section>
          <DataBar title="Total Case" value={dataTotal.data?.cases} />
          <DataBar title="Active Case" value={dataTotal.data?.active} />
          <DataBar title="Recovered Case" value={dataTotal.data?.recovered}/>
          <DataBar title="Deaths Case" value={dataTotal.data?.deaths} />
        </section>
        <article>
          <h2>Top 10 Country</h2>
          {topTencountries?.map((el) => 
          <TopTen key={0} flag={el?.countryInfo?.flag} country={el?.country} value={el?.cases}/> )}; 
        </article>
      </aside>

      <main>
        <CountrySelect/>
        <br/>
        <div>
          <CountryData title="Total Cases" value="3333" color="blue" />
          <CountryData title="Total Deaths" value="3333" color="red" />
          <CountryData title="Total Recovered" value="3333" color="green" />
          <CountryData title="Total Active" value="3333" color="cyan" />
          <CountryData title="New Cases" value="3333" color="orange" />
          <CountryData title="New Deaths" value="3333" color="redark" />
        </div>
        <footer>
          <DataFooter title="Total Confirmed" value="3333" color="blue"/>
          <DataFooter title="Total Recovered" value="3333" color="green"/>
          <DataFooter title="Total Deaths" value="3333" color="red"/>
          <DataFooter title="New Deaths" value="3333" color="redark"/>
          <DataFooter title="Hepl Line No." value="198" />
        </footer>
        
      </main>

    </>
  )
}
export default App







