import { useState } from 'react'
import DataBar from './components/common/aside/DataBar'
import TopTen from './components/common/aside/TopTen'
import SideBar from './components/common/sidebar/SideBar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <SideBar/>
      </nav> 

      <aside>
        <h1>COVID-19 Tracker</h1>
        <section>
          <DataBar title="Total Case" value="3333" hasColor={("blue")} />
          <DataBar title="Active Case" value="3333" />
          <DataBar title="Recovered Case" value="3333"/>
          <DataBar title="Deaths Case" value="3333" />
        </section>

        <article>
          <h2>Top 10 Country</h2>
          <TopTen country="USA" value="3333" />
          <TopTen country="Spain" value="3333" />
          <TopTen country="Italy" value="3333" />
          <TopTen country="USA" value="3333" />
          <TopTen country="USA" value="3333" />
        </article>

      </aside>



      <main>

      </main>



    </>
  )
}

export default App








