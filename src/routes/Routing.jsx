import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteTracker from "./RouteTracker";
import Home from "../home";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<RouteTracker />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing