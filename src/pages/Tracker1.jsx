
import CountryData from '../Components/CountryData';
import CountrySelect from '../Components/CountrySelect';
import DataFooter from '../Components/DataFooter';
import "./tracker.css"



const Tracker1 = () => {
    
  return (
    <>

        <header>
          <CountrySelect/>
          <h2>Updated: January 31, 2022</h2>
        </header>
        <br/>
        <hr/>
        <div className='displayCountry'>
          <div className='dataCountry'>
            <CountryData title="Total Cases" value="3333" color="blue" />
            <CountryData title="Total Deaths" value="3333" color="red" />
            <CountryData title="Total Recovered" value="3333" color="green" />
            <CountryData title="Total Active" value="3333" color="cyan" />
            <CountryData title="New Cases" value="3333" color="orange" />
            <CountryData title="New Deaths" value="3333" color="redark" />
          </div>
          <img src="../images/mapamundi.png"></img>
        </div>
        <br/>
        <footer>
          <DataFooter title="Total Confirmed" value="3333" color="blue"/>
          <DataFooter title="Total Recovered" value="3333" color="green"/>
          <DataFooter title="Total Deaths" value="3333" color="red"/>
          <DataFooter title="New Deaths" value="3333" color="redark"/>
          <DataFooter title="Hepl Line No." value="198" />
        </footer>
            
        </>
  
  )
}

export default Tracker1