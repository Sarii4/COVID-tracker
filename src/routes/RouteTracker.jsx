import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/layout/Layout'
import Tracker1 from '../pages/Tracker1'

const RouteTracker = ({children}) => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="tracker1" element={<Tracker1 />} exact />
                    <Route path="tracker2" element={<Tracker1 />} exact />
                    <Route path="tracker3" element={<Tracker1 />} exact />
                </Routes>
            </Layout>
        </>
    )
}

export default RouteTracker