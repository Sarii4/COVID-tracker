import { Outlet as Tracker } from "react-router-dom";
import DataBar from '../common/aside/DataBar'
import TopTen from '../common/aside/TopTen'
import SideBar from '../common/sidebar/SideBar'
//import getData from "./services/getData";
import useApi from '../../services/useApi';
import { API_WORLD_TOTAL, API_COUNTRY_TOTAL } from '../../config/urls';
import './layout.css'

const Layout = () => {

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

            <main><Tracker/></main>
        </>
    )
}

export default Layout
