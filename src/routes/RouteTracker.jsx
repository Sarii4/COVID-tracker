import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/layout/Layout'
import Tracker1 from '../pages/Tracker1'
import Tracker2 from '../pages/Tracker2'
import Tracker3 from '../pages/Tracker3'
import Tracker4 from '../pages/Tracker4'
import Tracker5 from '../pages/Tracker5'
import Tracker6 from '../pages/Tracker6'
import Tracker7 from '../pages/Tracker7'

const RouteTracker = ({children}) => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="tracker1" element={<Tracker1 />} exact />
                    <Route path="tracker2" element={<Tracker2 />} exact />
                    <Route path="tracker3" element={<Tracker3 />} exact />
                    <Route path="tracker4" element={<Tracker4 />} exact />
                    <Route path="tracker5" element={<Tracker5 />} exact />
                    <Route path="tracker6" element={<Tracker6 />} exact />
                    <Route path="tracker7" element={<Tracker7 />} exact />
                </Routes>
            </Layout>
        </>
    )
}

export default RouteTracker