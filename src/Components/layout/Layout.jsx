import { Outlet as Tracker } from "react-router-dom";
import DataBar from '../common/DataBar'
import TopTen from '../common/TopTen'
import SideBar from '../common/SideBar'
//import getData from "./services/getData";
import useApi from '../../services/useApi';
import { API_WORLD_TOTAL, API_COUNTRY_TOTAL } from '../../config/urls';
import './layout.css'

const Layout = ({children}) => {

    const dataTotal = useApi(API_WORLD_TOTAL);
    console.log(dataTotal);
    const dataCountries = useApi(API_COUNTRY_TOTAL);
    console.log(dataCountries);
    const countries = dataCountries.data;
    console.log(countries);
    const sortedCasesCountries = countries?.sort((a, b) => b.cases - a.cases);
    const topTencountries = sortedCasesCountries?.slice(0, 10)
    console.log(topTencountries);

    return (

        <>
        <div>
            <nav>
                <SideBar/>
            </nav>
            <aside>
                <h1>COVID-19 Tracker</h1>
                <section>
                    <DataBar title="Total Case" value={dataTotal.data?.cases} fondo="#f7e5e5" color="#ff0000" />
                    <DataBar title="Active Case" value={dataTotal.data?.active} fondo="#f5e5d2" color="#ff6a07"/>
                    <DataBar title="Recovered Case" value={dataTotal.data?.recovered} fondo="#e5fcd9" color="#82c519" />
                    <DataBar title="Deaths Case" value={dataTotal.data?.deaths} fondo="#dbf0f5" color="#3639ac"/>
                </section>
                <article>
                    <h2>Top 10 Country</h2>
                    {topTencountries?.map((el) => 
                    <TopTen key={0} flag={el?.countryInfo?.flag} country={el?.country} value={el?.cases}/> )}; 
                </article>
            </aside>
            <main>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout
